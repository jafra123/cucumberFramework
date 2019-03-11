$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/b/eclipse-workspace/FreeCrmBDDFrameworkNaveen/src/main/java/Features/login.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Login Feature",
  "description": "",
  "id": "free-crm-login-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 2,
      "value": "# no paramatrization hard coded valu"
    },
    {
      "line": 4,
      "value": "#Scenario: Free CRM Login Test Scenario"
    },
    {
      "line": 5,
      "value": "#Given User is already on login page"
    },
    {
      "line": 6,
      "value": "#When title of login page is Free CRM"
    },
    {
      "line": 7,
      "value": "#Then user enters username and password"
    },
    {
      "line": 8,
      "value": "#Then user clicks on login button"
    },
    {
      "line": 9,
      "value": "#Then user is on home page"
    },
    {
      "line": 14,
      "value": "#Scenario: Free CRM Login Test Scenario"
    },
    {
      "line": 15,
      "value": "#Given User is already on login page"
    },
    {
      "line": 16,
      "value": "#When title of login page is Free CRM"
    },
    {
      "line": 18,
      "value": "#Then user enters \"jafra123\" and \"canada123\""
    },
    {
      "line": 19,
      "value": "#Then user clicks on login button"
    },
    {
      "line": 20,
      "value": "#Then user is on home page"
    },
    {
      "line": 23,
      "value": "# with exaples keyword"
    }
  ],
  "line": 24,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 25,
  "name": "User is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 32,
  "name": "",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 33,
      "id": "free-crm-login-feature;free-crm-login-test-scenario;;1"
    },
    {
      "cells": [
        "jafra123",
        "canada123"
      ],
      "line": 34,
      "id": "free-crm-login-feature;free-crm-login-test-scenario;;2"
    },
    {
      "cells": [
        "tom",
        "test456"
      ],
      "line": 35,
      "id": "free-crm-login-feature;free-crm-login-test-scenario;;3"
    },
    {
      "cells": [
        "man",
        "manm1"
      ],
      "line": 36,
      "id": "free-crm-login-feature;free-crm-login-test-scenario;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 34,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 25,
  "name": "User is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "user enters \"jafra123\" and \"canada123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStwepDefination.User_already_on_login_page()"
});
formatter.result({
  "duration": 8200601825,
  "status": "passed"
});
formatter.match({
  "location": "LoginStwepDefination.title_login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 56062571,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jafra123",
      "offset": 13
    },
    {
      "val": "canada123",
      "offset": 28
    }
  ],
  "location": "LoginStwepDefination.user_enters_and(String,String)"
});
formatter.result({
  "duration": 1223145539,
  "status": "passed"
});
formatter.match({
  "location": "LoginStwepDefination.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 3433364902,
  "status": "passed"
});
formatter.match({
  "location": "LoginStwepDefination.user_is_on_home_page()"
});
formatter.result({
  "duration": 12133540,
  "status": "passed"
});
formatter.match({
  "location": "LoginStwepDefination.close_the_browser()"
});
formatter.result({
  "duration": 1192148282,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 25,
  "name": "User is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "user enters \"tom\" and \"test456\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStwepDefination.User_already_on_login_page()"
});
formatter.result({
  "duration": 5952991397,
  "status": "passed"
});
formatter.match({
  "location": "LoginStwepDefination.title_login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 49322130,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tom",
      "offset": 13
    },
    {
      "val": "test456",
      "offset": 23
    }
  ],
  "location": "LoginStwepDefination.user_enters_and(String,String)"
});
formatter.result({
  "duration": 1205366506,
  "status": "passed"
});
formatter.match({
  "location": "LoginStwepDefination.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 1238953944,
  "status": "passed"
});
formatter.match({
  "location": "LoginStwepDefination.user_is_on_home_page()"
});
formatter.result({
  "duration": 41228283,
  "error_message": "org.junit.ComparisonFailure: expected:\u003cCRMPRO[]\u003e but was:\u003cCRMPRO[ - CRM software for customer relationship management, sales, and support.]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat stepDefination.LoginStwepDefination.user_is_on_home_page(LoginStwepDefination.java:67)\r\n\tat ✽.Then user is on home page(C:/Users/b/eclipse-workspace/FreeCrmBDDFrameworkNaveen/src/main/java/Features/login.feature:29)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStwepDefination.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 36,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 25,
  "name": "User is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "user enters \"man\" and \"manm1\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStwepDefination.User_already_on_login_page()"
});
formatter.result({
  "duration": 8542458992,
  "status": "passed"
});
formatter.match({
  "location": "LoginStwepDefination.title_login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 65182786,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "man",
      "offset": 13
    },
    {
      "val": "manm1",
      "offset": 23
    }
  ],
  "location": "LoginStwepDefination.user_enters_and(String,String)"
});
formatter.result({
  "duration": 1314466195,
  "status": "passed"
});
formatter.match({
  "location": "LoginStwepDefination.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 2001841864,
  "status": "passed"
});
formatter.match({
  "location": "LoginStwepDefination.user_is_on_home_page()"
});
formatter.result({
  "duration": 957017093,
  "error_message": "org.junit.ComparisonFailure: expected:\u003cCRMPRO[]\u003e but was:\u003cCRMPRO[ - CRM software for customer relationship management, sales, and support.]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat stepDefination.LoginStwepDefination.user_is_on_home_page(LoginStwepDefination.java:67)\r\n\tat ✽.Then user is on home page(C:/Users/b/eclipse-workspace/FreeCrmBDDFrameworkNaveen/src/main/java/Features/login.feature:29)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStwepDefination.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});