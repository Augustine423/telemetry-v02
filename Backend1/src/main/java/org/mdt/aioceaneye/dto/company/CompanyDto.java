package org.mdt.aioceaneye.dto.company;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Builder;
import lombok.Data;

import java.sql.Date;

@Schema(
        name = "Company",
        description = "Company Schema used for Company Registration and Company Details Info"
)
@Data
@Builder
public class CompanyDto {
    private String name;
    private String businessNo;
    private String businessFile;
    private String country;
    private String homePage;
    private Date establishmentYear;
    private Integer employees;
    private String address;
    private String phoneNo;
    private String faxNo;
    private String representative;
    private String coUserEmail;
    private String coUserPhone;
    private String logo;
}
