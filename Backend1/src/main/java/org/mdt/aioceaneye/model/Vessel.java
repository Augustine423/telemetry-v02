package org.mdt.aioceaneye.model;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@EqualsAndHashCode(callSuper = true)
@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Vessel extends Auditable{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private String callSign;
    private String country;
    private String officeNo;
    private String imo;
    private String address;
    private String mmsi;
    private String phoneNo;
    private String email;
    private Double capacity;
    private LocalDate buildYear;
    private String logo;
    private String captainName;
    private String mate1Name;
    private String mate2Name;
    private String mate3Name;
    private String captainEmail;
    private String mate1Email;
    private String mate2Email;
    private String mate3Email;

    @ManyToOne
    private Company company;

    public void setCompany(Company company) {
        this.company = company;
        company.addVessel(this);
    }
}
