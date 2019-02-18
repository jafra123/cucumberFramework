$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/b/eclipse-workspace/FreeCrmBDDFrameworkNaveen/src/main/java/Features/dealsmap.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Create deals",
  "description": "",
  "id": "free-crm-create-deals",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Free CRM Create a new deals",
  "description": "",
  "id": "free-crm-create-deals;free-crm-create-a-new-deals",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enters username and password",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 7
    },
    {
      "cells": [
        "jafra123",
        "canada123"
      ],
      "line": 8
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user move to new deal page",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 13,
      "value": "# below data is only for this line"
    }
  ],
  "line": 14,
  "name": "user enters deal detail",
  "rows": [
    {
      "cells": [
        "title",
        "amount",
        "probability",
        "commisioin"
      ],
      "line": 15
    },
    {
      "cells": [
        "test deal",
        "1000",
        "50",
        "10"
      ],
      "line": 16
    },
    {
      "cells": [
        "test deal",
        "2000",
        "60",
        "20"
      ],
      "line": 17
    },
    {
      "cells": [
        "test deal",
        "3000",
        "70",
        "30"
      ],
      "line": 18
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "DealStepWithMap.User_already_on_login_page()"
});
formatter.result({
  "duration": 7937468888,
  "status": "passed"
});
formatter.match({
  "location": "DealStepWithMap.title_login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 42692317,
  "status": "passed"
});
formatter.match({
  "location": "DealStepWithMap.user_enters_username_and_password(DataTable)"
});
formatter.result({
  "duration": 1299758290,
  "status": "passed"
});
formatter.match({
  "location": "DealStepWithMap.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 3307144886,
  "status": "passed"
});
formatter.match({
  "location": "DealStepWithMap.user_is_on_home_page()"
});
formatter.result({
  "duration": 18798895,
  "status": "passed"
});
formatter.match({
  "location": "DealStepWithMap.user_move_to_new_deal_page()"
});
formatter.result({
  "duration": 1992753363,
  "status": "passed"
});
formatter.match({
  "location": "DealStepWithMap.user_enters_deal_detail(DataTable)"
});
formatter.result({
  "duration": 13184943436,
  "status": "passed"
});
formatter.match({
  "location": "DealStepWithMap.close_the_browser()"
});
formatter.result({
  "duration": 1219733638,
  "status": "passed"
});
});