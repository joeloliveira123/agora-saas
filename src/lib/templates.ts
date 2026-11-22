export const templateNames=['moderno','minimalista','corporativo'] as const;
export type Template=typeof templateNames[number];
export type Branding={template:Template;color:string;logoUrl:string};
export const defaultBranding:Branding={template:'moderno',color:'#2459e8',logoUrl:''};
