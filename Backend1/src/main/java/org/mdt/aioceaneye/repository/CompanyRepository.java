package org.mdt.aioceaneye.repository;

import org.mdt.aioceaneye.dto.company.CompanyInfo;
import org.mdt.aioceaneye.model.Company;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface CompanyRepository extends JpaRepository<Company,Integer> {


    @Query("""
    select new org.mdt.aioceaneye.dto.company.CompanyInfo(
    c.id,
    c.name,
    c.logo,
    c.businessNo,
    c.country,
    c.ceoName,
    c.phoneNo
    ) from Company c
""")
    List<CompanyInfo> findAllCompanyInfos(Pageable pageable);
}
