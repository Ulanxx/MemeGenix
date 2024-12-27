export type Language = 'en' | 'zh';

export interface Translations {
  header: {
    features: string;
    howItWorks: string;
    community: string;
    launchApp: string;
  };
  hero: {
    title: string;
    subtitle: string;
    startCreating: string;
    learnMore: string;
    features: {
      aiPowered: {
        title: string;
        description: string;
      };
      oneClick: {
        title: string;
        description: string;
      };
      secure: {
        title: string;
        description: string;
      };
    };
  };
  features: {
    title: string;
    subtitle: string;
    list: {
      aiGenerator: {
        title: string;
        description: string;
      };
      logoDesigner: {
        title: string;
        description: string;
      };
      smartContracts: {
        title: string;
        description: string;
      };
      security: {
        title: string;
        description: string;
      };
      tokenEconomics: {
        title: string;
        description: string;
      };
      communityTools: {
        title: string;
        description: string;
      };
    };
  };
  howItWorks: {
    title: string;
    subtitle: string;
    steps: {
      design: {
        title: string;
        description: string;
      };
      parameters: {
        title: string;
        description: string;
      };
      launch: {
        title: string;
        description: string;
      };
      community: {
        title: string;
        description: string;
      };
    };
  };
  community: {
    title: string;
    subtitle: string;
    features: {
      forums: {
        title: string;
        description: string;
      };
      network: {
        title: string;
        description: string;
      };
      insights: {
        title: string;
        description: string;
      };
    };
  };
  footer: {
    product: {
      title: string;
      features: string;
      howItWorks: string;
      pricing: string;
    };
    resources: {
      title: string;
      documentation: string;
      apiReference: string;
      blog: string;
    };
    connect: {
      title: string;
    };
    rights: string;
  };
}