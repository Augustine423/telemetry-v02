package org.mdt.aioceaneye.service;

import org.mdt.aioceaneye.dto.output.PageResult;
import org.mdt.aioceaneye.dto.vessel.VesselDetailsInfo;
import org.mdt.aioceaneye.dto.vessel.VesselInfo;
import org.mdt.aioceaneye.dto.vessel.VesselRegistrationForm;

import java.util.List;

public interface IVesselService {

    String registerVessel(VesselRegistrationForm form);

    PageResult<VesselInfo> fetchAllVesselInfoList(int page, int size);

    PageResult<VesselInfo> fetchVesselInfoListByCompanyId(int coId, int page, int size);

    VesselDetailsInfo fetchVesselDetailsInfoByVesselId(int vesselId);

    String updateVesselDetails(int vesselId, VesselRegistrationForm form);

    String deleteVesselById(int vesselId);
}
