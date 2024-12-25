export type Project = {
  id: string;
  name: string;
  slug: string;
  description: string;
};

export type Structure = {
  directory: {
    id: string;
    name: string;
  };
  projects: Project[];
  children?: Structure[];
  accessible: boolean;
};

export const rootStructure: Structure = {
  directory: {
    id: "833ed0db-8d8d-4096-8f27-b27f0352ecad",
    name: "Root thật",
  },
  projects: [
    {
      id: "1c2ca142-4c5b-4571-8c1f-64d663c14e45",
      name: "abc-renameASSSZZZZZZA",
      slug: "abc-kau91g4cez",
      description: "",
    },
    {
      id: "aa82e0d9-9108-48e0-9761-33a4178d2763",
      name: "b-updated",
      slug: "bbbbb-alo53j2xt7",
      description: "",
    },
    {
      id: "d514a103-d618-4fdb-989d-231f227e5a69",
      name: "Cloud Console",
      slug: "cloud-console-8bhwp47edd",
      description: "",
    },
    {
      id: "b6a18ad5-49c3-49a8-b12a-e76bac98de59",
      name: "thudtdsssssss",
      slug: "thudtd-customer-rh4jpy4bt8",
      description: "1",
    },
  ],
  children: [
    {
      directory: {
        id: "3ac45be2-93c5-4120-ab22-bf17ec6aadb6",
        name: "doremi",
      },
      projects: [],
      children: [
        {
          directory: {
            id: "7e6cd444-72a5-4078-9ab5-4e57cb9e6e87",
            name: "a doremi",
          },
          projects: [],
          accessible: true,
        },
        {
          directory: {
            id: "ee1d77da-99b4-4634-b6df-3cf43a2c9530",
            name: "con doremi",
          },
          projects: [],
          children: [
            {
              directory: {
                id: "0a060270-e231-488a-8172-83eaf68fa5e7",
                name: "chau doremi",
              },
              projects: [
                {
                  id: "5a52030b-380d-4a2d-80fe-160ba355ca0c",
                  name: "chat doremi",
                  slug: "chat-doremi-8tzj9aoir8",
                  description: "",
                },
              ],
              accessible: true,
            },
          ],
          accessible: true,
        },
        {
          directory: {
            id: "f9a65b75-bcbe-4ab2-8db7-5c32d57f7f0a",
            name: "d doremi",
          },
          projects: [],
          accessible: true,
        },
        {
          directory: {
            id: "f036346c-deaf-4f47-9e40-157304b20d9c",
            name: "string",
          },
          projects: [],
          accessible: true,
        },
      ],
      accessible: true,
    },
    {
      directory: {
        id: "50d0c61d-bc45-49e9-b848-9e0ba0a08ad3",
        name: "phòng ban abc",
      },
      projects: [
        {
          id: "cfcdf3b7-64d3-4db9-ab8f-159c3b41a35c",
          name: "dự án abc",
          slug: "du-an-abc-q3lbuth23s",
          description: "",
        },
      ],
      children: [
        {
          directory: {
            id: "31559637-d270-4a7e-966a-c78fcac1856c",
            name: "con abc",
          },
          projects: [],
          children: [
            {
              directory: {
                id: "9d73b0cd-0683-4e29-9c4d-3486f7fa0197",
                name: "Thailn8-test",
              },
              projects: [
                {
                  id: "b4fec665-9086-4d2f-80fc-ccc190c6a0bc",
                  name: "Thailn8",
                  slug: "thailn8-bksre5258d",
                  description: "",
                },
              ],
              children: [
                {
                  directory: {
                    id: "c0278bbe-3b81-4973-8cfe-2f2d8405c588",
                    name: "Jon Stewart Doe",
                  },
                  projects: [
                    {
                      id: "b572abfc-032d-4d75-9582-15e5ba0dab5f",
                      name: "ffff",
                      slug: "aadffsdfsdfsdf-4tlz16uvqk",
                      description: ";;;ll;\nlll\nlkj\nmmm,,\nklkkk",
                    },
                  ],
                  accessible: true,
                },
              ],
              accessible: true,
            },
          ],
          accessible: true,
        },
      ],
      accessible: true,
    },
    {
      directory: {
        id: "d51233c1-0eee-476c-832b-afdaddd992fe",
        name: "Root",
      },
      projects: [],
      accessible: true,
    },
    {
      directory: {
        id: "a99343c4-fded-44e3-a4ce-308e6e273ba9",
        name: "string",
      },
      projects: [],
      children: [
        {
          directory: {
            id: "5cbd0f66-29ed-4083-9bc9-d5a25ec5744b",
            name: "Root thật",
          },
          projects: [],
          accessible: true,
        },
        {
          directory: {
            id: "5e5c8e67-0262-4535-b73e-9de2f3a58e1a",
            name: "string",
          },
          projects: [],
          accessible: true,
        },
      ],
      accessible: true,
    },
  ],
  accessible: true,
};

export const CaretDown = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.54903 9.21663C6.50998 9.17789 6.47898 9.13181 6.45783 9.08104C6.43667 9.03026 6.42578 8.9758 6.42578 8.92079C6.42578 8.86579 6.43667 8.81133 6.45783 8.76055C6.47898 8.70978 6.50998 8.6637 6.54903 8.62496L6.7157 8.45829C6.75448 8.41803 6.80112 8.38616 6.85273 8.36466C6.90433 8.34316 6.9598 8.33248 7.0157 8.33329H12.9824C13.0383 8.33248 13.0937 8.34316 13.1453 8.36466C13.1969 8.38616 13.2436 8.41803 13.2824 8.45829L13.449 8.62496C13.4881 8.6637 13.5191 8.70978 13.5402 8.76055C13.5614 8.81133 13.5723 8.86579 13.5723 8.92079C13.5723 8.9758 13.5614 9.03026 13.5402 9.08104C13.5191 9.13181 13.4881 9.17789 13.449 9.21663L10.2907 12.375C10.2533 12.4148 10.2081 12.4466 10.1579 12.4683C10.1078 12.49 10.0537 12.5012 9.99903 12.5012C9.94437 12.5012 9.89028 12.49 9.84012 12.4683C9.78995 12.4466 9.74477 12.4148 9.70736 12.375L6.54903 9.21663Z"
      fill="#3C3A3C"
    />
  </svg>
);

export const CaretRight = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.80135 6.96724C8.76261 6.92819 8.71653 6.89719 8.66575 6.87604C8.61498 6.85488 8.56052 6.84399 8.50551 6.84399C8.45051 6.84399 8.39605 6.85488 8.34527 6.87604C8.2945 6.89719 8.24841 6.92819 8.20968 6.96724L8.04301 7.13391C8.00275 7.1727 7.97088 7.21933 7.94938 7.27094C7.92788 7.32254 7.9172 7.37801 7.91801 7.43391L7.91801 13.4006C7.9172 13.4565 7.92788 13.5119 7.94938 13.5635C7.97088 13.6152 8.00275 13.6618 8.04301 13.7006L8.20968 13.8672C8.24841 13.9063 8.2945 13.9373 8.34527 13.9584C8.39605 13.9796 8.45051 13.9905 8.50551 13.9905C8.56052 13.9905 8.61498 13.9796 8.66575 13.9584C8.71653 13.9373 8.76261 13.9063 8.80135 13.8672L11.9597 10.7089C11.9995 10.6715 12.0313 10.6263 12.053 10.5762C12.0747 10.526 12.0859 10.4719 12.0859 10.4172C12.0859 10.3626 12.0747 10.3085 12.053 10.2583C12.0313 10.2082 11.9995 10.163 11.9597 10.1256L8.80135 6.96724Z"
      fill="#8F9294"
    />
  </svg>
);

export const Cloud = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.2 8.1375C12.9291 5.40933 11.0367 3.75 8.8125 3.75C6.71016 3.75 5.35613 5.21859 4.9125 6.675C3.08438 6.85781 1.5 8.00313 1.5 10.0875C1.5 12.0984 3.14531 13.5 5.15625 13.5H13.0781C14.7539 13.5 16.125 12.6639 16.125 10.8188C16.125 8.99611 14.5102 8.20575 13.2 8.1375Z"
      stroke="#3C3A3C"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  </svg>
);
