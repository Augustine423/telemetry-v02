package org.mdt.aioceaneye.model;

import jakarta.persistence.*;
import lombok.*;

import java.sql.Date;
import java.util.List;

@EqualsAndHashCode(callSuper = true)
@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Company extends Auditable{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private String ceoName;
    private String businessNo;
    private String phoneNo;
    private String faxNo;
    private String address;
    private String homePage;
    private String coUserEmail;
    private String coUserPhone;
    private String country;
    private String logo;
    private Integer employees;
    private String businessFile;
    private Date establishmentYear;

    @OneToMany(mappedBy = "company", cascade = CascadeType.ALL)
    private List<Vessel> vesselList;

    public void addVessel(Vessel vessel) {
        this.vesselList.add(vessel);
    }
}
