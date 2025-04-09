package org.mdt.aioceaneye.controller;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.mdt.aioceaneye.dto.output.PageResult;
import org.mdt.aioceaneye.dto.vessel.VesselDetailsInfo;
import org.mdt.aioceaneye.dto.vessel.VesselInfo;
import org.mdt.aioceaneye.dto.vessel.VesselRegistrationForm;
import org.mdt.aioceaneye.service.IVesselService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Tag(
        name = "APIs for Vessels",
        description = "CRUD REST APIs for vessel in AiOceanEye"
)
@RestController
@RequiredArgsConstructor
@RequestMapping("/aioceaneye/vessels")
@CrossOrigin("*")
public class VesselController {

    private final IVesselService vesselService;

    @PostMapping
    public ResponseEntity<String> registerVessel(@RequestBody VesselRegistrationForm form) {
        return ResponseEntity.status(HttpStatus.CREATED).body(vesselService.registerVessel(form));
    }

    @GetMapping
    public ResponseEntity<PageResult<VesselInfo>> getAllVesselInfoList(
            @RequestParam(required = false, defaultValue = "0") int page,
            @RequestParam(required = false, defaultValue = "10") int size
    ) {
        return ResponseEntity.ok(vesselService.fetchAllVesselInfoList(page, size));
    }

    @GetMapping("/{vesselId}")
    public ResponseEntity<VesselDetailsInfo> getVesselDetailsInfoById(@PathVariable("vesselId") int vesselId) {
        return ResponseEntity.ok(vesselService.fetchVesselDetailsInfoByVesselId(vesselId));
    }

    @GetMapping("/company/{coId}")
    public ResponseEntity<PageResult<VesselInfo>> getVesselInfoListByCompanyId(
            @PathVariable("coId") int coId,
            @RequestParam(required = false, defaultValue = "0") int page,
            @RequestParam(required = false, defaultValue = "10") int size
            ) {
        return ResponseEntity.ok(vesselService.fetchVesselInfoListByCompanyId(coId, page, size));
    }

    @PutMapping("/{vesselId}")
    public ResponseEntity<String> updateVesselDetailsInfo(@PathVariable("vesselId") int vesselId,
                                                          @RequestBody VesselRegistrationForm form) {
        return ResponseEntity.ok(vesselService.updateVesselDetails(vesselId, form));
    }

    @DeleteMapping("/{vesselId}")
    public ResponseEntity<String> deleteVessel(@PathVariable("vesselId") int vesselId) {
        return ResponseEntity.ok(vesselService.deleteVesselById(vesselId));
    }
}
