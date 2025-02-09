import {
  LikeFilled,
  CalendarFilled,
  CustomerServiceFilled,
  StarFilled,
  HeartFilled,
  DownCircleFilled,
  FolderFilled,
  BulbFilled
} from '@ant-design/icons';


const IconMap = {
  recommend: LikeFilled,
  selected: BulbFilled,
  roam: CustomerServiceFilled,
  follow: StarFilled,
  like: HeartFilled,
  recent: CalendarFilled,
  download: DownCircleFilled,
  local: FolderFilled,
};

export const getIcon = (name: keyof typeof IconMap) => {
  return IconMap[name];
}

export const MenuList = [
  [
    {
      title: "推荐",
      icon: getIcon('recommend'),
      path: "/recommend",
    },
    {
      title: "精选",
      icon: getIcon('selected'),
      path: "/selected",
    },
    {
      title: '漫游',
      icon: getIcon('roam'),
      path: "/roam",
    },
    {
      title: '关注',
      icon: getIcon('follow'),
      path: "/follow",
    }
  ],
  [
    {
      title: "我喜欢的音乐",
      icon: getIcon('like'),
      path: "/like",
    },
    {
      title: "最近播放",
      icon: getIcon('recent'),
      path: "/recent",
    },
    {
      title: "下载管理",
      icon: getIcon('download'),
      path: "/download",
    },
    {
      title: "本地音乐",
      icon: getIcon('local'),
      path: "/local",
    }
  ]
];

export const SelectdMenu = [
  {
    title: '精选',
    path: '/selected/cherry-picks',
  },
  {
    title: '歌单广场',
    path: '/selected/list-square'
  },
  {
    title: '排行榜',
    path: '/selected/charts'
  },
  {
    title: '歌手',
    path: '/selected/artists'
  }
]