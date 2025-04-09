package org.mdt.aioceaneye.service;

import org.mdt.aioceaneye.dto.company.CompanyDto;
import org.mdt.aioceaneye.dto.company.CompanyInfo;
import org.mdt.aioceaneye.dto.output.PageResult;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface ICompanyService {

    String registerCompany(CompanyDto form);

    String updateCompany(int coId, CompanyDto form);

    PageResult<CompanyInfo> fetchCompanyInfoList(int page, int size);

    CompanyDto fetchCompanyDetailsById(int coId);

    String deleteCompany(int coId);
}
