package org.mdt.aioceaneye.dto.output;

import io.swagger.v3.oas.annotations.media.Schema;

import java.util.List;

@Schema(
        name = "Pagination Result for entities",
        description = "This schema can describe the list of contents per page, size per page, what is the current page and total items of the query result"
)
public record PageResult<T>(
        @Schema(description = "List of items per page")
        List<T> contents,
        @Schema(description = "Total count of items for query result")
        long totalItems,
        @Schema(description = "size of items per page")
        int size,
        @Schema(description = "what is the current page number")
        int currentPage
) {

    public int getTotalPages() {
        return (int) Math.ceil((double) totalItems / size);
    }
}
