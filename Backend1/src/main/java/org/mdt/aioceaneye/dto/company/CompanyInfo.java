package org.mdt.aioceaneye.dto.company;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Builder;
import lombok.Data;

@Schema(
        name = "Company Info",
        description = "Company Info Schema used for Company List View"
)
@Data
@Builder
public class CompanyInfo {
    private int id;
    private String name;
    private String logo;
    private String businessNo;
    private String country;
    private String representative;
    private String phoneNo;
}
