package org.mdt.aioceaneye.mapper;

import org.mdt.aioceaneye.dto.company.CompanyDto;
import org.mdt.aioceaneye.dto.company.CompanyInfo;
import org.mdt.aioceaneye.model.Company;

public class CompanyMapper {

    private CompanyMapper() {}

    public static Company toCompany(CompanyDto dto) {
        return Company.builder()
                .name(dto.getName())
                .ceoName(dto.getRepresentative())
                .businessNo(dto.getBusinessNo())
                .phoneNo(dto.getPhoneNo())
                .faxNo(dto.getFaxNo())
                .address(dto.getAddress())
                .homePage(dto.getHomePage())
                .coUserEmail(dto.getCoUserEmail())
                .coUserPhone(dto.getCoUserPhone())
                .country(dto.getCountry())
                .logo(dto.getLogo())
                .employees(dto.getEmployees())
                .businessFile(dto.getBusinessFile())
                .establishmentYear(dto.getEstablishmentYear())
                .build();
    }

    public static CompanyDto toCompanyDto(Company company) {
        return CompanyDto.builder()
                .name(company.getName())
                .businessNo(company.getBusinessNo())
                .country(company.getCountry())
                .homePage(company.getHomePage())
                .establishmentYear(company.getEstablishmentYear())
                .employees(company.getEmployees())
                .address(company.getAddress())
                .phoneNo(company.getPhoneNo())
                .faxNo(company.getFaxNo())
                .representative(company.getCeoName())
                .coUserEmail(company.getCoUserEmail())
                .coUserPhone(company.getCoUserPhone())
                .logo(company.getLogo())
                .build();
    }

    public static CompanyInfo toCompanyInfo(Company company) {
        return CompanyInfo.builder()
                .id(company.getId())
                .name(company.getName())
                .logo(company.getLogo())
                .businessNo(company.getBusinessNo())
                .country(company.getCountry())
                .representative(company.getCeoName())
                .phoneNo(company.getPhoneNo())
                .build();
    }

    public static Company updateCompany(Company company, CompanyDto form) {
        company.setName(form.getName());
        company.setBusinessNo(form.getBusinessNo());
        company.setBusinessFile(form.getBusinessFile());
        company.setCountry(form.getCountry());
        company.setHomePage(form.getHomePage());
        company.setEstablishmentYear(form.getEstablishmentYear());
        company.setEmployees(form.getEmployees());
        company.setAddress(form.getAddress());
        company.setPhoneNo(form.getPhoneNo());
        company.setFaxNo(form.getFaxNo());
        company.setCeoName(form.getRepresentative());
        company.setCoUserEmail(form.getCoUserEmail());
        company.setCoUserPhone(form.getCoUserPhone());
        company.setLogo(form.getLogo());
        return company;
    }
}
