package org.mdt.aioceaneye.service.impl;

import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.mdt.aioceaneye.dto.company.CompanyDto;
import org.mdt.aioceaneye.dto.company.CompanyInfo;
import org.mdt.aioceaneye.dto.output.PageResult;
import org.mdt.aioceaneye.mapper.CompanyMapper;
import org.mdt.aioceaneye.model.Company;
import org.mdt.aioceaneye.repository.CompanyRepository;
import org.mdt.aioceaneye.service.ICompanyService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CompanyServiceImpl implements ICompanyService {

    private final CompanyRepository companyRepository;

    @Override
    public String registerCompany(CompanyDto form) {
        Company company = CompanyMapper.toCompany(form);
        companyRepository.save(company);
        return "Company: " + company.getName() + " saved successfully.";
    }

    @Override
    public String updateCompany(int coId, CompanyDto form) {
        Company company = companyRepository.findById(coId)
                .orElseThrow(() -> new EntityNotFoundException("Company not found with id " + coId));

        companyRepository.save(CompanyMapper.updateCompany(company, form));
        return "Company: " + company.getName() + " updated successfully.";
    }

    @Override
    public PageResult<CompanyInfo> fetchCompanyInfoList(int page, int size) {
        var count = companyRepository.count();
        var companyList = companyRepository.findAllCompanyInfos(PageRequest.of(page, size).withSort(Sort.by(Sort.Direction.DESC, "createdAt")));
        return new PageResult<>(companyList, count, size, page);
    }

    @Override
    public CompanyDto fetchCompanyDetailsById(int coId) {
        Company company = companyRepository.findById(coId)
                .orElseThrow(() -> new EntityNotFoundException("Company not found with id " + coId));
        return CompanyMapper.toCompanyDto(company);
    }

    @Override
    public String deleteCompany(int coId) {
        Company company = companyRepository.findById(coId)
                .orElseThrow(() -> new EntityNotFoundException("Company not found with id " + coId));
        companyRepository.delete(company);
        return "Company: " + company.getName() + " deleted successfully.";
    }
}
