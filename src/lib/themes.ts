export type Theme = {
  id: string
  name: string
  description: string
  colors: string[]
  gradients: string[]
}

export const themes: Array<Theme> = [
  {
    id: '083',
    name: 'rustic forest',
    description:
      'Blending soft creams, warm accents and deep forest greens in a cozy, rustic, nature inspired palette.',
    colors: ['#fbf5f0', '#f2e3d8', '#db783e', '#aa423a', '#024a43', '#142d25'],
    gradients: [
      'from-[#f2e3d8] via-[#db783e] to-[#aa423a] from-30% via-70%',
      'from-[#142d25] via-[#aa423a] to-[#f2e3d8] from-30% via-70%',
    ],
  },
  {
    id: '095',
    name: 'midnight cove',
    description:
      'Soft pastels, deep blue-greens in a sophisticated palette fit for coastal resorts, luxury spas, or organic skincare products.',
    colors: ['#f1f3f9', '#f1b393', '#dbd0a8', '#469ba7', '#005765', '#012731'],
    gradients: [
      'from-[#f1f3f9] to-[#dbd0a8]',
      'from-[#f1b393] to-[#469ba7]',
      'from-[#dbd0a8] via-[#469ba7] to-[#012731] via-80%',
      'from-[#469ba7] to-[#012731]',
      'from-[#005765] to-[#012731]',
    ],
  },
  {
    id: '187',
    name: 'blush at dusk',
    description:
      'Brings together blush tones, aquatic vibes, and a deep twilight blue. Perfect for emotionally driven design, like beauty and personal care.',
    colors: ['#f6f2f1', '#ede2e0', '#f8c0ba', '#e94e6d', '#327a88', '#0f084b'],
    gradients: [
      'from-[#f9f7ec] to-[#f8c0ba]',
      'from-[#ede2e0] to-[#e94e6d]',
      'from-[#f8c0ba] via-[#e94e6d] to-[#0f084b] via-80%',
      'from-[#e94e6d] to-[#0f084b]',
      'from-[#327a88] to-[#0f084b]',
    ],
  },
  {
    id: '218',
    name: 'anchored ember',
    description:
      'Contrasts warm, light tones with cool, grounding tones in a modern, vibrant and engaging palette.',
    colors: ['#f4f5fa', '#dacfba', '#ffc100', '#3d9973', '#192961', '#111122'],
    gradients: [
      'from-[#f4f5fa] to-[#dacfba]',
      'from-[#dacfba] to-[#ffc100]',
      'from-[#ffc100] to-[#3d9973]',
      'bg-[linear-gradient(100deg,#ffc100,#3d9973_25%,#192961_80%,#111122)]! lg:bg-[linear-gradient(190deg,#ffc100,#3d9973_25%,#192961_80%,#111122)]!',
      'from-[#3d9973] to-[#192961]',
    ],
  },
  {
    id: '223',
    name: 'indigo atelier',
    description:
      'Pairs soft, warm tones evoking handcrafting with deep navy anchors for a grounded look with a human touch. Great for artisanal and boutique brands.',
    colors: ['#ebebe9', '#dec0ad', '#e8a784', '#9d4542', '#114a6b', '#001b2e'],
    gradients: [
      'from-[#ebebe9] to-[#dec0ad]',
      'from-[#dec0ad] to-[#e8a784]',
      'from-[#e8a784] to-[#9d4542]',
      'from-[#e8a784] via-[#9d4542] to-[#114a6b] via-70%',
      'from-[#114a6b] to-[#001b2e]',
    ],
  },
  {
    id: '231', // palette number from Alex Cristache
    name: 'electric tide', // genereated, semantic name
    description:
      'Modern palette that blends soft off-white and warm neutrals with vibrant lime, cool ocean tones, and deep deep teals. A high-contrast aquatic-inspired selection.',
    colors: ['#f7f5ec', '#b8e100', '#b2a69a', '#1b8188', '#1c3b42', '#0f1519'],
    gradients: [
      'from-[#f7f5ec] to-[#b2a69a]',
      'from-[#b8e100] to-[#b2a69a]',
      'from-[#b2a69a] to-[#1b8188]',
      'from-[#b8e100] via-[#1b8188] to-[#1c3b42] via-80%',
      'from-[#1b8188] to-[#1c3b42]',
    ],
  },
  {
    id: '280',
    name: 'still meadow',
    description:
      'Built for brands that value calm, authenticity, and a slower pace. Well suited to wellness, nature, and mindful living.',
    colors: ['#f0f4f8', '#eedac9', '#99c1cc', '#c2d3af', '#3a5f49', '#103222'],
    gradients: [
      'from-[#f0eeeb] to-[#eedac9]',
      'from-[#eedac9] to-[#99c1cc]',
      'from-[#c2d3af] to-[#99c1cc]',
      'bg-[linear-gradient(100deg,#eedac9,#c2d3af_25%,#3a5f49_80%,#103222)]! lg:bg-[linear-gradient(190deg,#eedac9,#c2d3af_25%,#3a5f49_80%,#103222)]!',
      'from-[#3a5f49] to-[#103222]',
    ],
  },
  {
    id: '282',
    name: 'citrus & tide',
    description:
      'Optimistic, vibrant, Mediterranean-inspired palette designed to celebrate color with confidence.',
    colors: ['#f0f4f8', 'fbec5e', '#68dfbb', '#2599b2', '#225288', '#082d4f'],
    gradients: [
      'from-[#f0f4f8] to-[#fbec5e]',
      'from-[#fbec5e] to-[#68dfbb]',
      'from-[#68dfbb] to-[#2599b2]',
      'bg-[linear-gradient(100deg,#fbec5e,#68dfbb_25%,#2599b2_80%,#225288)]! lg:bg-[linear-gradient(190deg,#fbec5e,#68dfbb_25%,#2599b2_80%,#225288)]!',
      'from-[#225288] to-[#082d4f]',
    ],
  },
  {
    id: '293',
    name: '',
    description: '',
    colors: ['#f0f4f2', '#e6c7b7', '#b4a6d5', '#b4d8d2', '#135952', '#142838'],
    gradients: [
      'from-[#f0f4f2] to-[#e6c7b7]',
      'from-[#e6c7b7] to-[#b4a6d5]',
      'from-[#e6c7b7] to-[#b4d8d2]',
      'from-[#b4d8d2] via-[#135952] to-[#142838] via-80%',
      'from-[#135952] to-[#142838]',
    ],
  },
]
