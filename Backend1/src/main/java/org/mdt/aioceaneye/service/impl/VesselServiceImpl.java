package org.mdt.aioceaneye.service.impl;

import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.mdt.aioceaneye.dto.output.PageResult;
import org.mdt.aioceaneye.dto.vessel.VesselDetailsInfo;
import org.mdt.aioceaneye.dto.vessel.VesselInfo;
import org.mdt.aioceaneye.dto.vessel.VesselRegistrationForm;
import org.mdt.aioceaneye.mapper.VesselMapper;
import org.mdt.aioceaneye.model.Company;
import org.mdt.aioceaneye.model.Vessel;
import org.mdt.aioceaneye.repository.CompanyRepository;
import org.mdt.aioceaneye.repository.VesselRepository;
import org.mdt.aioceaneye.service.IVesselService;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class VesselServiceImpl implements IVesselService {

    private final VesselRepository vesselRepository;
    private final CompanyRepository companyRepository;

    @Override
    public String registerVessel(VesselRegistrationForm form) {
        Vessel vessel = VesselMapper.toVessel(form);
        Company company = companyRepository.findById(form.getCoId())
                .orElseThrow(() -> new EntityNotFoundException("Company with id " + form.getCoId() + " not found!"));
        vessel.setCompany(company);
        vesselRepository.save(vessel);
        return "Vessel: " + vessel.getName() + " registered successfully for Company: " + company.getName();
    }

    @Override
    public PageResult<VesselInfo> fetchAllVesselInfoList(int page, int size) {
        var count = vesselRepository.count();
        var vesselList = vesselRepository.findAllVesselInfo(PageRequest.of(page, size).withSort(Sort.by(Sort.Direction.DESC, "createdAt")));
        return new PageResult<>(vesselList, count, size, page);
    }

    @Override
    public PageResult<VesselInfo> fetchVesselInfoListByCompanyId(int coId, int page, int size) {
        var count = vesselRepository.countByCompanyId(coId);
        var vesselList = vesselRepository.findAllVesselInfoByCompanyId(coId, PageRequest.of(page, size).withSort(Sort.by(Sort.Direction.DESC, "createdAt")));
        return new PageResult<>(vesselList, count, size, page);
    }

    @Override
    public VesselDetailsInfo fetchVesselDetailsInfoByVesselId(int vesselId) {
        Vessel vessel = vesselRepository.findById(vesselId).orElseThrow(() -> new EntityNotFoundException("Vessel " + vesselId + " not found!"));
        return VesselMapper.toVesselDetailsInfo(vessel);
    }

    @Override
    public String updateVesselDetails(int vesselId, VesselRegistrationForm form) {
        Vessel vessel = vesselRepository.findById(vesselId).orElseThrow(() -> new EntityNotFoundException("Vessel " + vesselId + " not found!"));
        vesselRepository.save(VesselMapper.updateVessel(vessel, form));
        return "Vessel : " + vessel.getName() + " updated successfully!";
    }

    @Override
    public String deleteVesselById(int vesselId) {
        Vessel vessel = vesselRepository.findById(vesselId).orElseThrow(() -> new EntityNotFoundException("Vessel " + vesselId + " not found!"));
        vesselRepository.delete(vessel);
        return "Vessel : " + vessel.getName() + " deleted successfully!";
    }
}
