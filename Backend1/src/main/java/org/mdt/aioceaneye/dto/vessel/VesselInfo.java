package org.mdt.aioceaneye.dto.vessel;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Data;

@Schema(
        name = "Vessel Info",
        description = "Vessel Info Schema used for Vessels List"
)
@Data
@AllArgsConstructor
public class VesselInfo {
    private Integer id;
    private String logo;
    private String name;
    private String flag;
    private String imo;
    private String mmsi;
    private String callSign;
}
