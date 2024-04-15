CREATE TABLE companies(
                          company_id  bigint auto_increment primary key,
                          name         varchar(64)  not null,
                          timeToNetZero varchar(24) not null,
                          co2Emissions        varchar(24) not null,
                          employeeNumber        varchar(24)  not null,
                          totaledScore        varchar(12)  not null
);

CREATE TABLE users(
                          user_id  bigint auto_increment primary key,
                          name         varchar(64)  not null,
                          username varchar(64) not null,
                          password        varchar(64) not null,
                          email        varchar(128)  not null,
                          enabled        varchar(12)  not null
);

