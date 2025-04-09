package org.mdt.aioceaneye.dto.vessel;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

import java.time.LocalDate;

@Schema(
        name = "Vessel Registration Form",
        description = "Vessel Schema for Vessel registration for one Company"
)
@Data
public class VesselRegistrationForm {
    private String name;
    private String callSign;
    private Integer coId;
    private String country;
    private Double capacity;
    private String mmsi;
    private String officeNo;
    private String imo;
    private String address;
    private LocalDate buildYear;
    private String phoneNo;
    private String email;
    private String captainName;
    private String captainEmail;
    private String mate1Name;
    private String mate1Email;
    private String mate2Name;
    private String mate2Email;
    private String mate3Name;
    private String mate3Email;
    private String logo;
}
