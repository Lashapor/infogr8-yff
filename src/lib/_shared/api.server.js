import { env } from "$env/dynamic/private";
export const prerender = false;

export const API = {
  getCareerDataMetaProps: (query) => {
    const path = `${env.STRAPI_ENDPOINT}/api/career-plus-stories?filters[slug][$eq]=${query || ""}&fields[0]=seoMetaTitle&fields[1]=seoMetaDescription`;


    return fetch(path, {
      method: "GET",
      redirect: "follow",
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${process.env.CMS_ACCESS_TOKEN}`
      },
    }).then(async (d) => {
      const result = await d.json();
      result.STRAPI_ENDPOINT = env.STRAPI_ENDPOINT;
      return result;
    });
  },
  getJobDataMetaProps: (query) => {
    const path = `${env.STRAPI_ENDPOINT}/api/jobs-data?filters[slug][$eq]=${query || ""}&fields[0]=seoMetaTitle&fields[1]=seoMetaDescription`;
    console.log('loading', path)
    return fetch(path, {
      method: "GET",
      redirect: "follow",
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${process.env.CMS_ACCESS_TOKEN}`
      },
    }).then(async (d) => {
      const result = await d.json();
      result.STRAPI_ENDPOINT = env.STRAPI_ENDPOINT;
      return result;
    });
  },
  getStoryMetaProps: (query) => {
    const path = `${env.STRAPI_ENDPOINT}/api/stories?filters[urlSlug][$eq]=${query || ""}&fields[0]=seoMetaTitle&fields[1]=seoMetaDescription`;

    return fetch(path, {
      method: "GET",
      redirect: "follow",
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${process.env.CMS_ACCESS_TOKEN}`
      },
    }).then(async (d) => {
      const result = await d.json();
      result.STRAPI_ENDPOINT = env.STRAPI_ENDPOINT;
      return result;
    });
  },
  jobsData: (query) => {
    const path = `${env.STRAPI_ENDPOINT}/api/jobs-data?populate=*&pagination[limit]=500${query || ""}`;

    return fetch(path, {
      method: "GET",
      redirect: "follow",
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${process.env.CMS_ACCESS_TOKEN}`
      },
    }).then(async (d) => {
      const result = await d.json();
      result.STRAPI_ENDPOINT = env.STRAPI_ENDPOINT;
      return result;
    });
  },
  jobRolesSubset: (query) => {
    const path = `${env.STRAPI_ENDPOINT}/api/job-roles-subsets?populate=*&pagination[limit]=500${query || ""}`;

    return fetch(path, {
      method: "GET",
      redirect: "follow",
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${process.env.CMS_ACCESS_TOKEN}`
      },
    }).then(async (d) => {
      const result = await d.json();
      result.STRAPI_ENDPOINT = env.STRAPI_ENDPOINT;
      return result;
    });
  },

  stories: (query) => {
    const path = `${env.STRAPI_ENDPOINT}/api/stories?populate=*&pagination[limit]=500${query || ""}`;

    return fetch(path, {
      method: "GET",
      redirect: "follow",
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${process.env.CMS_ACCESS_TOKEN}`
      },
    }).then(async (d) => {
      const result = await d.json();
      result.STRAPI_ENDPOINT = env.STRAPI_ENDPOINT;
      return result;
    });
  },

  relationJobRoleStories: (query) => {
    const path = `${env.STRAPI_ENDPOINT}/api/relation-job-role-story-videos?populate=*&pagination[limit]=10000${query || ""
      }`;

    return fetch(path, {
      method: "GET",
      redirect: "follow",
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${process.env.CMS_ACCESS_TOKEN}`
      },
    }).then(async (d) => {
      const result = await d.json();
      result.STRAPI_ENDPOINT = env.STRAPI_ENDPOINT;
      return result;
    });
  },

  homePageData: (query) => {
    const path = `${env.STRAPI_ENDPOINT}/api/home-page?populate=*&pagination[limit]=10000${query || ""
      }`;

    return fetch(path, {
      method: "GET",
      redirect: "follow",
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${process.env.CMS_ACCESS_TOKEN}`
      },
    }).then(async (d) => {
      const result = await d.json();
      result.STRAPI_ENDPOINT = env.STRAPI_ENDPOINT;
      return result;
    });
  },

  careerPlusPageData: (query) => {
    const path = `${env.STRAPI_ENDPOINT}/api/career-plus-page?populate=*&pagination[limit]=10000${query || ""
      }`;

    return fetch(path, {
      method: "GET",
      redirect: "follow",
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${process.env.CMS_ACCESS_TOKEN}`
      },
    }).then(async (d) => {
      const result = await d.json();
      result.STRAPI_ENDPOINT = env.STRAPI_ENDPOINT;
      return result;
    });
  },

  careerPlusStoriesData: (query) => {
    const path = `${env.STRAPI_ENDPOINT}/api/career-plus-stories?populate=*&pagination[limit]=10000${query || ""
      }`;

    return fetch(path, {
      method: "GET",
      redirect: "follow",
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${process.env.CMS_ACCESS_TOKEN}`
      },
    }).then(async (d) => {
      const result = await d.json();
      result.STRAPI_ENDPOINT = env.STRAPI_ENDPOINT;
      return result;
    });
  },

  // http://localhost:8888/api/relation-job-role-story-videos?populate=*
};
