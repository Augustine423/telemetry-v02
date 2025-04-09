package org.mdt.aioceaneye.dto.vessel;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Builder;
import lombok.Data;

@Schema(
        name = "Vessel Details Info",
        description = "Vessel Schema for Vessel Details Info"
)
@Data
@Builder
public class VesselDetailsInfo {
    private String name;
    private String callSign;
    private String companyName;
    private String country;
    private Double capacity;
    private String officeNo;
    private String imo;
    private String mmsi;
    private String address;
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
