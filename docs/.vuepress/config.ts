import { defaultTheme } from '@vuepress/theme-default'

export default {
  lang: 'en-US',
  title: 'VMware Blockchain Ethereum Developer Kit',
  description: 'Description goes Here',
  base: '/vmware-blockchain-samples/',
  theme: defaultTheme({
    navbar: [
      // Deployment
      {
        text: 'Deployment',
        link: '/deployment',
      },
      // Permissioning
      {
        text: 'Permissioning',
        link: '/permissioning',
      },
      // Sample DApps
      {
        text: 'Sample DApps',
        link: '/sample-dapps',
        children: [{
          text: "Artemis",
          link: '/sample-dapps/artemis'
        },
        {
          text: 'ERC20 Swap',
          link: '/sample-dapps/erc20-swap'
        }]
      },
      // Accountable Privacy
      {
        text: 'Accountable Privacy',
        children: ['/accountable-privacy'],
      }
    ],
  }),
}