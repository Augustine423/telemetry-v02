package org.mdt.aioceaneye.repository;

import org.mdt.aioceaneye.dto.vessel.VesselInfo;
import org.mdt.aioceaneye.model.Vessel;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface VesselRepository extends JpaRepository<Vessel,Integer> {

    @Query("""
    select new org.mdt.aioceaneye.dto.vessel.VesselInfo(
    v.id,
    v.logo,
    v.name,
    v.country,
    v.imo,
    v.mmsi,
    v.callSign
    ) from Vessel v
""")
    List<VesselInfo> findAllVesselInfo(Pageable pageable);

    @Query("""
    select new org.mdt.aioceaneye.dto.vessel.VesselInfo(
    v.id,
    v.logo,
    v.name,
    v.country,
    v.imo,
    v.mmsi,
    v.callSign
    ) from Vessel v where v.company.id=:coId
""")
    List<VesselInfo> findAllVesselInfoByCompanyId(int coId, Pageable pageable);

    @Query("""
    select count(v.id) from Vessel v where v.company.id=:coId
""")
    long countByCompanyId(int coId);
}
