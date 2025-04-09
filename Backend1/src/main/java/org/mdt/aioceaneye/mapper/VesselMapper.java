package org.mdt.aioceaneye.mapper;

import org.mdt.aioceaneye.dto.vessel.VesselDetailsInfo;
import org.mdt.aioceaneye.dto.vessel.VesselRegistrationForm;
import org.mdt.aioceaneye.model.Vessel;

public class VesselMapper {

    private VesselMapper() {}

    public static Vessel toVessel(VesselRegistrationForm form) {
        return Vessel.builder()
                .name(form.getName())
                .callSign(form.getCallSign())
                .country(form.getCountry())
                .officeNo(form.getOfficeNo())
                .imo(form.getImo())
                .address(form.getAddress())
                .mmsi(form.getMmsi())
                .phoneNo(form.getPhoneNo())
                .email(form.getEmail())
                .capacity(form.getCapacity())
                .buildYear(form.getBuildYear())
                .logo(form.getLogo())
                .captainName(form.getCaptainName())
                .mate1Name(form.getMate1Name())
                .mate2Name(form.getMate2Name())
                .mate3Name(form.getMate3Name())
                .captainEmail(form.getCaptainEmail())
                .mate1Email(form.getMate1Email())
                .mate2Email(form.getMate2Email())
                .mate3Email(form.getMate3Email())
                .build();
    }

    public static VesselDetailsInfo toVesselDetailsInfo(Vessel vessel) {
        return VesselDetailsInfo.builder()
                .name(vessel.getName())
                .callSign(vessel.getCallSign())
                .companyName(vessel.getCompany().getName())
                .country(vessel.getCountry())
                .capacity(vessel.getCapacity())
                .officeNo(vessel.getOfficeNo())
                .imo(vessel.getImo())
                .mmsi(vessel.getMmsi())
                .address(vessel.getAddress())
                .phoneNo(vessel.getPhoneNo())
                .email(vessel.getEmail())
                .captainName(vessel.getCaptainName())
                .captainEmail(vessel.getCaptainEmail())
                .mate1Name(vessel.getMate1Name())
                .mate1Email(vessel.getMate1Email())
                .mate2Name(vessel.getMate2Name())
                .mate2Email(vessel.getMate2Email())
                .mate3Name(vessel.getMate3Name())
                .mate3Email(vessel.getMate3Email())
                .logo(vessel.getLogo())
                .build();
    }

    public static Vessel updateVessel(Vessel vessel, VesselRegistrationForm form) {
        vessel.setName(form.getName());
        vessel.setCallSign(form.getCallSign());
        vessel.setCountry(form.getCountry());
        vessel.setOfficeNo(form.getOfficeNo());
        vessel.setImo(form.getImo());
        vessel.setAddress(form.getAddress());
        vessel.setMmsi(form.getMmsi());
        vessel.setPhoneNo(form.getPhoneNo());
        vessel.setEmail(form.getEmail());
        vessel.setCapacity(form.getCapacity());
        vessel.setBuildYear(form.getBuildYear());
        vessel.setLogo(form.getLogo());
        vessel.setCaptainName(form.getCaptainName());
        vessel.setCaptainEmail(form.getCaptainEmail());
        vessel.setMate1Name(form.getMate1Name());
        vessel.setMate1Email(form.getMate1Email());
        vessel.setMate2Name(form.getMate2Name());
        vessel.setMate2Email(form.getMate2Email());
        vessel.setMate3Name(form.getMate3Name());
        vessel.setMate3Email(form.getMate3Email());

        return vessel;
    }
}
