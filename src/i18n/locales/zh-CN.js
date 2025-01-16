export default {
  common: {
    cancel: "取消",
    confirm: "确定",
    save: "保存",
    delete: "删除",
    edit: "编辑",
    copy: "复制",
    copied: "已复制",
    copyFailed: "复制失败",
    loading: "加载中...",
    syncing: "同步中...",
    noData: "暂无数据",
    search: "搜索",
    settings: "设置",
    login: "登 录",
    logout: "退出",
    back: "返回",
    reset: "重置",
    openInNewWindow: "在新窗口中打开",
    share: "分享",
    star: "收藏",
    unstar: "取消收藏",
    next: "下一篇",
    previous: "上一篇",
    close: "关闭",
    read: "已读",
    unread: "未读",
    normal: "正常",
    success: "操作成功",
    error: "系统异常",
    article: "文章",
    feed: "订阅",
    category: "分类",
    neverSync: "从未同步",
    minute: "分钟",
    lessThanAMinute: "不到 1 分钟",
  },
  sidebar: {
    addCategory: "新建分类",
    categoryName: "标题",
    categoryNamePlaceholder: "请输入分类标题",
    categoryNameRequired: "请输入分类标题",
    addFeed: {
      title: "新建订阅",
      feedUrl: "订阅地址",
      feedTitle: "标题",
      feedCategory: "分类",
      feedCrawler: "抓取原始内容",
      feedCrawlerDescription: "尝试自动抓取原始内容",
      feedTitlePlaceholder: "请输入订阅标题",
      feedCategoryPlaceholder: "请选择分类",
      feedCategoryRequired: "请选择分类",
      feedUrlPlaceholder: "请输入订阅地址",
      feedUrlRequired: "请输入订阅地址",
    },
    profile: {
      settings: "设置",
      openMiniflux: "访问 Miniflux",
      logout: "注销",
      logoutConfirmDescription: "确定要注销吗？注销后本地数据及设置将清空。",
    },
    shortcuts: {
      title: "快捷键",
      previous: "上一篇文章",
      next: "下一篇文章",
      toggleRead: "切换已读状态",
      toggleStar: "切换收藏状态",
      close: "关闭文章",
      viewInBrowser: "在浏览器中查看",
      toggleSidebar: "切换侧边栏",
      toggleShortcuts: "查看/隐藏快捷键",
      refresh: "刷新",
      search: "全局搜索",
      global: "全局",
      article: "文章",
    },
    importOPML: "导入 OPML",
  },
  articleList: {
    emptyPlaceholder: "请选择文章",
    markAllRead: "全部标记为已读",
    starred: "收藏",
    starredItems: "篇收藏",
    noStarred: "无收藏",
    unread: "未读",
    unreadItems: "篇未读",
    noUnread: "无未读",
    all: "全部",
    unsubscribe: "取消订阅",
    unsubscribeDescription: "取消订阅",
    editFeed: {
      title: "编辑订阅",
      feedUrl: "订阅地址",
      feedTitle: "标题",
      feedCategory: "分类",
      feedHide: "隐藏订阅",
      feedCrawler: "抓取原始内容",
      feedCrawlerDescription: "尝试自动抓取原始内容",
      feedHideDescription: "默认隐藏此订阅及其文章",
      feedTitlePlaceholder: "请输入订阅标题",
      feedCategoryPlaceholder: "请选择分类",
      feedCategoryRequired: "请选择分类",
      feedUrlPlaceholder: "请输入订阅地址",
      feedUrlRequired: "请输入订阅地址",
    },
    renameCategory: {
      title: "重命名分类",
      categoryName: "标题",
      categoryNamePlaceholder: "请输入分类标题",
      categoryNameRequired: "请输入分类标题",
    },
  },
  articleView: {
    imageError: "加载图片失败",
    stopPlay: "停止播放",
    getFullText: "阅读模式",
    showSummary: "隐藏阅读模式",
  },
  player: {
    "Current time": "当前时间",
    "Disable captions": "禁用字幕",
    "Enable captions": "启用字幕",
    "Enter Fullscreen": "进入全屏",
    "Enter PiP": "进入画中画",
    "Exit Fullscreen": "退出全屏",
    "Exit PiP": "退出画中画",
    "Go back to previous menu": "返回上一菜单",
    Ad: "广告",
    AirPlay: "AirPlay",
    All: "全部",
    Audio: "音频",
    Auto: "自动",
    Buffered: "缓冲",
    Captions: "字幕",
    Default: "默认",
    Disabled: "禁用",
    Download: "下载",
    Duration: "持续时间",
    Enabled: "启用",
    End: "结束",
    Forward: "前进",
    LIVE: "直播",
    Loop: "循环",
    Mute: "静音",
    Normal: "正常",
    Pause: "暂停",
    Play: "播放",
    Played: "已播放",
    Quality: "质量",
    Reset: "重置",
    Restart: "重新开始",
    Rewind: "倒退",
    Seek: "搜索",
    Settings: "设置",
    Speed: "播放速度",
    Start: "开始",
    Unmute: "取消静音",
    Volume: "音量",
  },
  search: {
    title: "搜索",
    searchPlaceholder: "请输入关键词",
    searchResultsPlaceholder: "无相关结果",
    searchArticlesPlaceholder: "搜索文章...",
    searchFeedsPlaceholder: "搜索订阅...",
    toggleItem: "切换条目",
    open: "打开",
  },
  auth: {
    login: "登录到您的服务器",
    username: "用户名",
    password: "密码",
    serverUrl: "服务器地址",
    loginFailed: "登录失败",
    needMoreInfo: "需要更多信息？",
    visitMiniflux: "访问 Miniflux 官网",
    usernamePlaceholder: "请输入用户名",
    passwordPlaceholder: "请输入密码",
    serverUrlPlaceholder: "请输入 Miniflux 服务器地址",
  },
  settings: {
    title: "设置",
    general: {
      title: "常规",
      language: "语言",
      interfaceLanguage: "界面语言",
      sync: "同步",
      syncInterval: "同步间隔",
      syncOff: "手动",
      sync5min: "每 5 分钟",
      sync15min: "每 15 分钟",
      sync30min: "每 30 分钟",
      sync1hour: "每 1 小时",
      feeds: "订阅",
      showHiddenFeeds: "显示隐藏订阅",
      defaultExpandCategory: "默认展开分类",
      articleList: "文章列表",
      sortItems: "排序",
      sortDesc: "新文章优先",
      sortAsc: "旧文章优先",
      markAsReadOnScroll: "滚动时标记为已读",
      showUnreadByDefault: "默认显示未读文章",
    },
    appearance: {
      title: "外观",
      theme: "主题",
      mode: "主题模式",
      light: "浅色",
      dark: "深色",
      system: "系统",
      lightTheme: "浅色主题",
      darkTheme: "深色主题",
      themes: {
        light: "浅色",
        stone: "石灰",
        dark: "深色",
        "black-dark": "纯黑色",
      },
      favicons: "图标",
      shape: "形状",
      circle: "圆形",
      square: "方形",
      grayscale: "灰度图标",
      articleList: "文章列表",
      imagePreviews: "图片预览",
      none: "无",
      small: "小",
      large: "大",
      showFavicon: "显示订阅图标",
      showTextPreview: "文本预览",
      showReadingTime: "估计阅读时间",
      codeBlock: "代码块",
      showLineNumbers: "显示行号",
      forceDarkCodeTheme: "强制深色主题",
      motion: "动画",
      reduceMotion: "减弱动画效果",
    },
    readability: {
      title: "阅读",
      text: "文本",
      autoHideToolbar: "自动隐藏工具栏",
      font: "字体",
      systemFont: "系统",
      sansSerif: "sans-serif",
      serif: "serif",
      notoSerifSC: "思源宋体",
      notoSansSC: "思源黑体",
      lxgwWenKai: "霞鹜文楷",
      textAlignJustify: "两端对齐",
      lineHeight: "行高",
      fontSize: "字体大小",
      maxWidth: "最大宽度",
      articleTitle: "标题",
      titleAlign: "对齐",
      titleFontSize: "大小",
      reset: "重 置",
    },
  },
};
