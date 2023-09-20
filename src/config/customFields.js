const consts = require("./consts")

module.exports = {
  artifactHubUrl: "https://artifacthub.io/packages/helm/agnost/agnost",

  crunchbaseUrl: "https://www.crunchbase.com/organization/agnost",
  demoUrl: `https://studio.agnost.dev/auth/signup`,
  description:
    "Powerful backend as a service platform helping you to easily build, deploy and manage scalable backend apps.",
  dockerUrl: "https://hub.docker.com/r/agnost/agnost",
  domain: consts.domain,
  githubOrgUrl: consts.githubOrgUrl,
  githubUrl: consts.githubOrgUrl,
  serverlessUrl: "https://www.agnost.dev",
  helmVersion: "0.11.0",
  linkedInUrl: "https://www.linkedin.com/company/agnost/",
  oneLiner: "Agnost - Open-source Kubernetes Development Platform",
  slackUrl: `https://slack.${consts.domain}`,
  stackoverflowUrl: "https://stackoverflow.com/questions/tagged/agnost",
  twitterUrl: "https://twitter.com/agnostdev",
  videosUrl: "https://youtu.be/bMfF9Yeg2lI",
  apiRef: "https://clientapi.agnost.com/v0.0.1/modules.html",
  discordUrl: "https://discord.gg/ERK2ssumh8",
  circleUrl: "https://community.agnost.com",
  deployLink: process.env.DEPLOY_LINK,
  productHuntUrl: "https://www.producthunt.com/posts/agnost",
  repoUrl: "https://github.com/agnost",
  logoUrl: "img/logo.svg",

  // Agnost fields

  productionUrl: "https://agnost.dev",
  tagLine:
    "Your kubernetes based cloud native application platform. Agnost is a platform that helps you to deploy your applications on kubernetes with ease.",
  title: "Agnost - Open-source Kubernetes Development Platform",
  organizationName: "agnost",
  projectName: "agnost",
  copyright: `Copyright © ${new Date().getFullYear()} Agnost | All rights reserved`,
}
