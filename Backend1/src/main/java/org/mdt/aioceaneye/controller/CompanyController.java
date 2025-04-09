package org.mdt.aioceaneye.controller;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.mdt.aioceaneye.dto.company.CompanyDto;
import org.mdt.aioceaneye.dto.company.CompanyInfo;
import org.mdt.aioceaneye.dto.output.PageResult;
import org.mdt.aioceaneye.service.impl.CompanyServiceImpl;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Tag(
        name = "APIs for Companies",
        description = "CRUD REST APIs for company in AiOceanEye"
)
@RestController
@RequiredArgsConstructor
@RequestMapping("/aioceaneye/companies")
@CrossOrigin("*")
public class CompanyController {

    private final CompanyServiceImpl companyService;


    @PostMapping
    public ResponseEntity<String> registerCompany(@RequestBody CompanyDto companyDto) {
        return ResponseEntity.status(HttpStatus.CREATED).body(companyService.registerCompany(companyDto));
    }

    @GetMapping
    public ResponseEntity<PageResult<CompanyInfo>> getAllCompanyInfos(
            @RequestParam(required = false, defaultValue = "0") int page,
            @RequestParam(required = false, defaultValue = "10") int size
    ) {
        return ResponseEntity.ok(companyService.fetchCompanyInfoList(page, size));
    }

    @GetMapping("/{coId}")
    public ResponseEntity<CompanyDto> getCompanyDetailsInfoById(@PathVariable int coId) {
        return ResponseEntity.ok(companyService.fetchCompanyDetailsById(coId));
    }

    @PutMapping("/{coId}")
    public ResponseEntity<String> updateCompanyDetailsById(@PathVariable int coId, @RequestBody CompanyDto companyDto) {
        return ResponseEntity.ok(companyService.updateCompany(coId, companyDto));
    }

    @DeleteMapping("/{coId}")
    public ResponseEntity<String> deleteCompanyById(@PathVariable int coId) {
        return ResponseEntity.ok(companyService.deleteCompany(coId));
    }
}
