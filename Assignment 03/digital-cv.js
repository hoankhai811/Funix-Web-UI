"use strict";

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const projectList = {
  1: {
    goals: [
      {
        title: "Goal 1",
        description: "Phát triển tối ưu code",
      },
      {
        title: "Goal 2",
        description: "Xử lý lỗi",
      },
    ],
    team: [
      {
        title: "Member 1",
        description: "Nguyen Van A",
      },
      {
        title: "Member 2",
        description: "Nguyen Van B",
      },
      {
        title: "Member 3",
        description: "Nguyen Van C",
      },
    ],
    scopes: {
      in: ["FUNIX", "FPT", "Self"],
      out: ["Self"],
    },
    primary: [
      {
        description: "Tạo header",
      },
      {
        description: "Tạo body",
      },
      {
        description: "Tạo footer",
      },
      {
        description: "Deploy code lên web browser",
      },
    ],
    timeline: [
      {
        title: "01/01/2024",
        description: "Tạo header",
      },
      {
        title: "03/01/2024",
        description: "Tạo body",
      },
      {
        title: "04/01/2024",
        description: "Tạo footer",
      },
      {
        title: "05/01/2024",
        description: "Deploy code lên web browser",
      },
    ],
  },
  2: {
    goals: [
      {
        title: "Goal 1",
        description: "Phát triển tối ưu code",
      },
      {
        title: "Goal 2",
        description: "Xử lý lỗi",
      },
    ],
    team: [
      {
        title: "Member 1",
        description: "Nguyen Van A",
      },
      {
        title: "Member 2",
        description: "Nguyen Van B",
      },
      {
        title: "Member 3",
        description: "Nguyen Van C",
      },
    ],
    scopes: {
      in: ["FUNIX", "FPT", "Self"],
      out: ["Self"],
    },
    // Cân nặng, giống, tình trạng tiêm chủng, ...Bao gồm các chức năng thêm/xóa/sửa
    primary: [
      {
        description: "Cân nặng",
      },
      {
        description: "Giống",
      },
      {
        description: "Tình trạng tiêm chủng",
      },
      {
        description: "Các chức năng thêm/xóa/sửa",
      },
      {
        description: "Deploy code lên web browser",
      },
    ],
    timeline: [
      {
        title: "01/01/2024",
        description: "Cân nặng",
      },
      {
        title: "03/01/2024",
        description: "Giống",
      },
      {
        title: "04/01/2024",
        description: "Tình trạng tiêm chủng",
      },
      {
        title: "05/01/2024",
        description: "Các chức năng thêm/xóa/sửa",
      },
      {
        title: "07/01/2024",
        description: "Deploy code lên web browser",
      },
    ],
  },
  3: {
    goals: [
      {
        title: "Goal 1",
        description: "Phát triển tối ưu code",
      },
      {
        title: "Goal 2",
        description: "Xử lý lỗi",
      },
    ],
    team: [
      {
        title: "Member 1",
        description: "Nguyen Van A",
      },
      {
        title: "Member 2",
        description: "Nguyen Van B",
      },
      {
        title: "Member 3",
        description: "Nguyen Van C",
      },
    ],
    scopes: {
      in: ["FUNIX", "FPT", "Self"],
      out: ["Self"],
    },
    // Trang web xem tin tức từ các nguồn khác nhau, người dùng có thể tìm kiếm các tin tức dựa trên các từ khóa.
    primary: [
      {
        description: "Trang web xem tin tức từ các nguồn khác nhau",
      },
      {
        description:
          "Người dùng có thể tìm kiếm các tin tức dựa trên các từ khóa",
      },
      {
        description: "Các chức năng thêm/xóa/sửa",
      },
      {
        description: "Deploy code lên web browser",
      },
    ],
    timeline: [
      {
        title: "01/01/2024",
        description: "Trang web xem tin tức từ các nguồn khác nhau",
      },
      {
        title: "03/01/2024",
        description:
          "Người dùng có thể tìm kiếm các tin tức dựa trên các từ khóa",
      },
      {
        title: "05/01/2024",
        description: "Các chức năng thêm/xóa/sửa",
      },
      {
        title: "07/01/2024",
        description: "Deploy code lên web browser",
      },
    ],
  },
};

function createTimelineElement(timeLine, index) {
  const goalDiv = document.createElement("div");
  goalDiv.classList.add("goals-content");

  const icon = document.createElement("button");
  icon.classList.add("timeline-btn");
  icon.textContent = "0" + index;
  const contentDiv = document.createElement("div");
  contentDiv.classList.add("content");

  const title = document.createElement("h5");
  title.classList.add("content-title");
  title.textContent = timeLine.title;
  contentDiv.appendChild(title);

  const description = document.createElement("p");
  description.classList.add("content-desc");
  description.textContent = timeLine.description;

  contentDiv.appendChild(description);

  goalDiv.appendChild(icon);
  goalDiv.appendChild(contentDiv);

  return goalDiv;
}

function createScopeElement(scope) {
  const goalDiv = document.createElement("div");
  goalDiv.classList.add("scopes-content");

  const contentInDiv = document.createElement("div");
  const contentOutDiv = document.createElement("div");
  contentInDiv.classList.add("content");
  contentOutDiv.classList.add("content");
  const titleIn = document.createElement("h4");
  titleIn.classList.add("content-title");
  titleIn.textContent = "In";
  const titleOut = document.createElement("h4");
  titleOut.classList.add("content-title");
  titleOut.textContent = "Out";
  contentInDiv.appendChild(titleIn);
  contentOutDiv.appendChild(titleOut);

  scope.in.forEach((item) => {
    const descriptionIn = document.createElement("p");
    descriptionIn.classList.add("content-desc");
    descriptionIn.textContent = item;
    contentInDiv.appendChild(descriptionIn);
  });
  scope.out.forEach((item) => {
    const descriptionOut = document.createElement("p");
    descriptionOut.classList.add("content-desc");
    descriptionOut.textContent = item;
    contentOutDiv.appendChild(descriptionOut);
  });

  goalDiv.appendChild(contentInDiv);
  goalDiv.appendChild(contentOutDiv);

  return goalDiv;
}

function createGoalElement(obj, iconDivParams, iconClass, isPrimary) {
  const goalDiv = document.createElement("div");
  goalDiv.classList.add("goals-content");

  const iconDiv = document.createElement("div");
  iconDiv.classList.add(iconDivParams);
  const icon = document.createElement("i");
  icon.classList.add(...iconClass);

  const contentDiv = document.createElement("div");
  contentDiv.classList.add("content");
  if (!isPrimary) {
    const title = document.createElement("h5");
    title.classList.add("content-title");
    title.textContent = obj.title;
    contentDiv.appendChild(title);
  }
  const description = document.createElement("p");
  description.classList.add("content-desc");
  description.textContent = obj.description;

  iconDiv.appendChild(icon);
  contentDiv.appendChild(description);

  goalDiv.appendChild(iconDiv);
  goalDiv.appendChild(contentDiv);

  return goalDiv;
}

window.addEventListener("load", (event) => {
  const currentClickedProject = localStorage.getItem("currentClickedProject");
  const goalsBoard = $(".board-goals");
  const teamBoard = $(".board-team");
  const scopesBoard = $(".board-scopes");
  const primaryBoard = $(".board-primary");
  const timeLineBoard = $(".board-right");

  projectList[currentClickedProject].goals.forEach((goal) => {
    const goalElement = createGoalElement(
      goal,
      "goals-icon",
      ["fa-solid", "fa-flag-checkered"],
      false
    );
    goalsBoard.appendChild(goalElement);
  });
  projectList[currentClickedProject].team.forEach((team) => {
    const teamElement = createGoalElement(
      team,
      "team-icon",
      ["fa-solid", "fa-user"],
      false
    );
    teamBoard.appendChild(teamElement);
  });
  projectList[currentClickedProject].primary.forEach((primary) => {
    const primaryElement = createGoalElement(
      primary,
      "goals-icon",
      ["fa-solid", "fa-circle-question"],
      true
    );
    primaryBoard.appendChild(primaryElement);
  });
  projectList[currentClickedProject].timeline.forEach((timeLine, index) => {
    const timeLineElement = createTimelineElement(timeLine, index + 1);
    timeLineBoard.appendChild(timeLineElement);
  });
  const scopeElement = createScopeElement(
    projectList[currentClickedProject].scopes
  );
  scopesBoard.appendChild(scopeElement);
});
