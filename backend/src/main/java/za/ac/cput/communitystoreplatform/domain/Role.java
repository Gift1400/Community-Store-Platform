package za.ac.cput.communitystoreplatform.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Role {
    @Id
    private String roleId;
    private String description;
    private String roleName;

    protected Role(){}

    public Role(Builder builder){
        this.roleId = builder.roleId;
        this.description = builder.description;
        this.roleName = builder.roleName;
    }

    public String getRoleId(){ return roleId;}
    public String getDescription(){ return description;}
    public String getRoleName(){ return roleName;}

    public String toString(){
        return "Role{ " + "\n" +
                "Role Id: " + roleId + "\n" +
                "Description: " + description + "\n" +
                "Role: " + roleName + "}";
    }

    public static class Builder{
        private String roleId;
        private String description;
        private String roleName;

        public Builder copy(Role role){
            this.roleId = role.roleId;
            this.description = role.description;
            this.roleName = role.roleName;
            return this;
        }

        public Builder setRoleId(String roleId){
            this.roleId = roleId;
            return this;
        }
        public Builder setDescription(String description){
            this.description = description;
            return this;
        }
        public Builder setRoleName(String roleName){
            this.roleName = roleName;
            return this;
        }

        public Role build(){
            return new Role(this);
        }
    }
}
