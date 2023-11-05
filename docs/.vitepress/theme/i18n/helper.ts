export interface I18nConfig {
  common: {
    language: string,
    makeInterest: string,
    slogan: string,
    getStarted: string,
    getComponents: string,
    changePrefix: string,
    apply: string,
    prefixChanged: string,
    invalidPrefix: string,
    changeColor: string,
    rollColor: string,
    resetColor: string,
    shareExperience: string,
    tellUs: string,
    guides: string,
    components: string,
    playground: string,
    ecosystem: string,
    official: string,
    partnership: string,
    becomePartner: string,
    searchComponent: string,
    copyCode: string,
    copySuccess: string,
    copyFail: string,
    showCode: string,
    hideCode: string,
    editOnGithub: string,
    editOnPlayground: string,
    editPage: string,
    pageNotFound: string,
    backHomepage: string,
    lastUpdated: string,
    contributors: string,
    thanksContribute: string,
    toggleDirection: string,
    toggleTheme: string,
    viewInGithub: string,
    openSettings: string,
    adjustSettings: string,
    changeOrder: string,
    orderChanged: string
  },
  alert: {
    info: string,
    warning: string,
    error: string
  },
  guide: {
    introduction: string,
    vexipui: string,
    gettingStarted: string,
    nameOrigin: string,
    logoOrigin: string,
    further: string,
    globalConfig: string,
    styleConfig: string,
    i18n: string,
    ssr: string,
    customFormControl: string,
    developmentGuide: string,
    customInternalIcons: string
  },
  group: {
    basis: string,
    layout: string,
    navigation: string,
    form: string,
    data: string,
    effect: string,
    else: string
  },
  footer: {
    resources: string,
    lintConfigSet: string,
    createProject: string,
    gridLayout: string,
    fantasticAdmin: string,
    hooksLib: string,
    logoDesign: string,
    help: string,
    changelog: string,
    issue: string,
    contribute: string,
    qqGroup?: string,
    sponsor: string,
    releaseScripts: string
  },
  component: {
    // Basis
    Button: string,
    Icon: string,
    Linker: string,
    Typography: string,

    // Layout
    Grid: string,
    Divider: string,
    Layout: string,
    NativeScroll: string,
    Row: string,
    Scroll: string,
    Space: string,
    Split: string,

    // Navigation
    Anchor: string,
    Breadcrumb: string,
    Dropdown: string,
    Menu: string,
    Pagination: string,

    // Form
    AutoComplete: string,
    Cascader: string,
    Checkbox: string,
    ColorPicker: string,
    DatePicker: string,
    Form: string,
    FullScreen: string,
    Input: string,
    NumberInput: string,
    Radio: string,
    Result: string,
    Select: string,
    Slider: string,
    Switch: string,
    Textarea: string,
    TimePicker: string,
    Transfer: string,
    Upload: string,
    Wheel: string,

    // Data
    Video: string,
    Avatar: string,
    Badge: string,
    Bubble: string,
    Calendar: string,
    Card: string,
    Carousel: string,
    Collapse: string,
    Ellipsis: string,
    Highlight: string,
    Image: string,
    Table: string,
    TabNav: string,
    Tabs: string,
    Tag: string,
    TimeAgo: string,
    Timeline: string,
    Tooltip: string,
    Tree: string,
    Viewer: string,

    // Effect
    Alert: string,
    Confirm: string,
    Contextmenu: string,
    Drawer: string,
    Loading: string,
    Message: string,
    Modal: string,
    Notice: string,
    Progress: string,
    Skeleton: string,
    Spin: string,
    Toast: string,
    Tour: string,

    // Else
    Affix: string,
    ConfigProvider: string,
    Masker: string,
    Overflow: string,
    Renderer: string,
    ResizeObserver: string,
    Scrollbar: string,
    VirtualList: string
  }
}

export function defineI18n(config: I18nConfig) {
  return config
}
