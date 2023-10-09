package com.ravenclaw.harmony.dto;

public class UserDTO {
    private Integer orgID;
    private String name;
    private String type;

    public UserDTO() {
    }

    public UserDTO(Integer orgID, String name, String type) {
        this.orgID = orgID;
        this.name = name;
        this.type = type;
    }

    public Integer getOrgID() {
        return orgID;
    }

    public void setOrgID(Integer orgID) {
        this.orgID = orgID;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

}

