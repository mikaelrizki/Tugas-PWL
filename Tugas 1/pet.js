const petList = [
  {
    id: "C-1",
    name: "Biscuit",
    weight: 10.2,
    type: "Cat",
    photo: {
      thumb:
        "https://res.cloudinary.com/hzrulbrds/image/upload/v1582764387/thumbs/biscuit_tn_njuvwl.jpg",
      full: "https://res.cloudinary.com/hzrulbrds/image/upload/v1582764166/biscuit_inhtt3.jpg",
    },
    description:
      "Medium-furred lilac tortoiseshell classic tabby cat with white tipped tail with heterochromatic yellow and green eyes",
    published_at: "2022-12-17T00:00:00+00:00",
  },
  {
    id: "C-2",
    name: "Jungle",
    type: "Cat",
    weight: 9.7,
    description:
      "Short curly-furred white she-cat with dichroic golden and green eyes; with a kinked tail, with average floppy ears",
    photo: {
      thumb:
        "https://res.cloudinary.com/hzrulbrds/image/upload/v1582764387/thumbs/jungle_tn_ayjti1.jpg",
      full: "https://res.cloudinary.com/hzrulbrds/image/upload/v1582764112/jungle_evdm47.jpg",
    },
    published_at: "2023-02-09T00:00:00+00:00",
  },
  {
    id: "C-3",
    name: "Benji",
    description:
      "Medium-furred blue caramel tortoiseshell cat with white tipped tail with dichroic orange and green eyes",
    type: "Cat",
    weight: 10.9,
    photo: {
      thumb:
        "https://res.cloudinary.com/hzrulbrds/image/upload/v1582764387/thumbs/benji_tn_cjccyb.jpg",
      full: "https://res.cloudinary.com/hzrulbrds/image/upload/v1582764036/benji_rkg884.jpg",
    },
    published_at: "2023-03-09T00:00:00+00:00",
  },
  {
    id: "C-4",
    name: "Beebee",
    type: "Cat",
    description:
      "Long-furred blue caramel calico sepia she-cat with golden eyes",
    weight: 13.3,
    photo: {
      thumb:
        "https://res.cloudinary.com/hzrulbrds/image/upload/v1582764387/thumbs/beebee_tn_ljyrpc.jpg",
      full: "https://res.cloudinary.com/hzrulbrds/image/upload/v1582763988/beebee_oqtgld.jpg",
    },
    published_at: "2023-08-08T00:00:00+00:00",
  },
  {
    id: "C-5",
    type: "Cat",
    description:
      "Long-furred black spotted tabby she-cat with white chest with orange eyes",
    name: "Pillow",
    weight: 8.3,
    photo: {
      thumb:
        "https://res.cloudinary.com/hzrulbrds/image/upload/v1582764388/thumbs/pillow_tn_owau6w.jpg",
      full: "https://res.cloudinary.com/hzrulbrds/image/upload/v1582764042/pillow_j9yenx.jpg",
    },
    published_at: "2023-05-08T00:00:00+00:00",
  },
  {
    id: "C-6",
    type: "Cat",
    name: "Buddy",
    description:
      "Medium-furred smoke tortoiseshell cat with white paws with turquoise eyes; and is deaf, with a missing limb, and is mute",
    weight: 9.2,
    photo: {
      thumb:
        "https://res.cloudinary.com/hzrulbrds/image/upload/v1582764387/thumbs/buddy_tn_syqsun.jpg",
      full: "https://res.cloudinary.com/hzrulbrds/image/upload/v1582764293/buddy_oln5er.jpg",
    },
    published_at: "2023-01-20T00:00:00+00:00",
  },
  {
    id: "C-7",
    name: "Mini",
    type: "Cat",
    weight: 5.2,
    description: "Short-furred lilac she-cat with aqua eyes",
    photo: {
      thumb:
        "https://res.cloudinary.com/hzrulbrds/image/upload/v1582764388/thumbs/mini_tn_jpjxnq.jpg",
      full: "https://res.cloudinary.com/hzrulbrds/image/upload/v1582764180/mini_stjtkm.jpg",
    },
    published_at: "2023-01-23T00:00:00+00:00",
  },
  {
    id: "D-1",
    name: "Danton",
    description: "A brindle, silver cattle dog, with dull hetrochromatic eyes",
    type: "Dog",
    weight: 50.4,
    photo: {
      thumb:
        "https://res.cloudinary.com/hzrulbrds/image/upload/v1582764387/thumbs/danton_tn_dg5hwl.jpg",
      full: "https://res.cloudinary.com/hzrulbrds/image/upload/v1582763990/danton_et1gql.jpg",
    },
    published_at: "2023-02-23T00:00:00+00:00",
  },
  {
    id: "D-2",
    description: "A spotted, yellow golden retreiver, with cold brown eyes",
    name: "Archy",
    type: "Dog",
    weight: 19.9,
    photo: {
      thumb:
        "https://res.cloudinary.com/hzrulbrds/image/upload/v1582764387/thumbs/archy_tn_qlgg24.jpg",
      full: "https://res.cloudinary.com/hzrulbrds/image/upload/v1582763883/archy_yehmk9.jpg",
    },
    published_at: "2023-02-20T00:00:00+00:00",
  },
  {
    id: "D-3",
    name: "Otis",
    description: "A spotted, gold golden retreiver, with dull brown eyes.",
    type: "Dog",
    weight: 50.4,
    photo: {
      thumb:
        "https://res.cloudinary.com/hzrulbrds/image/upload/v1582764388/thumbs/otis_tn_lhim8b.jpg",
      full: "https://res.cloudinary.com/hzrulbrds/image/upload/v1582764030/otis_s6rnrm.jpg",
    },
    published_at: "2023-02-25T00:00:00+00:00",
  },
  {
    id: "D-4",
    description: "A merle, gold koolie, with warm hazel eyes.",
    name: "Luna",
    type: "Dog",
    weight: 75.4,
    photo: {
      thumb:
        "https://res.cloudinary.com/hzrulbrds/image/upload/v1582764388/thumbs/luna_tn_ghpxtv.jpg",
      full: "https://res.cloudinary.com/hzrulbrds/image/upload/v1582763994/luna_zdqqlx.jpg",
    },
    published_at: "2023-02-02T00:00:00+00:00",
  },
  {
    id: "D-5",
    name: "Canela",
    description: "A brindle with white, cream koolie, with wild hazel eyes.",
    type: "Dog",
    weight: 100.4,
    photo: {
      thumb:
        "https://res.cloudinary.com/hzrulbrds/image/upload/v1582764387/thumbs/canela_tn_qxvlai.jpg",
      full: "https://res.cloudinary.com/hzrulbrds/image/upload/v1582763877/canela_fwp5mm.jpg",
    },
    published_at: "2023-02-03T00:00:00+00:00",
  },
  {
    id: "D-6",
    name: "Mehla",
    type: "Dog",
    description: "A bi colour, yellow cattle dog, with mysterious yellow eyes.",
    weight: 90.3,
    photo: {
      thumb:
        "https://res.cloudinary.com/hzrulbrds/image/upload/v1582764388/thumbs/mehla_tn_cxccvz.jpg",
      full: "https://res.cloudinary.com/hzrulbrds/image/upload/v1582764044/mehla_yvsqfb.jpg",
    },
    published_at: "2023-05-08T00:00:00+00:00",
  },
  {
    id: "D-7",
    name: "Rainier McCheddarton",
    type: "Dog",
    description:
      "A brindle with white, red golden retreiver, with cold hazel eyes.",
    weight: 70.4,
    photo: {
      thumb:
        "https://res.cloudinary.com/hzrulbrds/image/upload/v1582764388/thumbs/rainier_tn_naxsxt.jpg",
      full: "https://res.cloudinary.com/hzrulbrds/image/upload/v1582763878/rainier_yeodlm.jpg",
    },
    published_at: "2023-07-30T00:00:00+00:00",
  },
  {
    id: "D-8",
    name: "Pax",
    description: "A merle, silver golden retreiver, with wild amber eyes.",
    type: "Dog",
    weight: 52.7,
    photo: {
      thumb:
        "https://res.cloudinary.com/hzrulbrds/image/upload/v1582764388/thumbs/pax_tn_yhw1gz.jpg",
      full: "https://res.cloudinary.com/hzrulbrds/image/upload/v1582764041/pax_aj6wqh.jpg",
    },
    published_at: "2023-07-05T00:00:00+00:00",
  },
  {
    id: "D-9",
    name: "Lucie",
    type: "Dog",
    description: "A brindle, silver golden retreiver, with hollow yellow eyes.",
    weight: 44.7,
    photo: {
      thumb:
        "https://res.cloudinary.com/hzrulbrds/image/upload/v1582764388/thumbs/lucie_tn_we1rji.jpg",
      full: "https://res.cloudinary.com/hzrulbrds/image/upload/v1582763973/lucie_ro5isy.jpg",
    },
    published_at: "2023-07-04T00:00:00+00:00",
  },
  {
    id: "S-1",
    name: "Lazer",
    description: "Cartilaginous fish related to sharks",
    type: "Fish",
    weight: 15.7,
    photo: {
      thumb:
        "https://res.cloudinary.com/hzrulbrds/image/upload/v1582764388/thumbs/lazer_tn_jgcolg.jpg",
      full: "https://res.cloudinary.com/hzrulbrds/image/upload/v1582763985/lazer_yrwvzu.jpg",
    },
    published_at: "2023-07-03T00:00:00+00:00",
  },
  {
    id: "S-2",
    name: "Switchblade",
    description:
      "Enormous vegetarians can be found in warm coastal waters from East Africa to Australia, including the Red Sea, Indian Ocean, and Pacific.",
    type: "Fish",
    weight: 20.7,
    photo: {
      thumb:
        "https://res.cloudinary.com/hzrulbrds/image/upload/v1582764389/thumbs/switchblade_tn_qcmybh.jpg",
      full: "https://res.cloudinary.com/hzrulbrds/image/upload/v1582764363/switchblade_emzkx3.jpg",
    },
    published_at: "2023-07-03T00:00:00+00:00",
  },
  {
    id: "S-3",
    name: "Steve",
    description:
      "Graze on underwater grasses day and night, rooting for them with their bristled, sensitive snouts and chomping them with their rough lips.",
    type: "Fish",
    weight: 20.4,
    photo: {
      thumb:
        "https://res.cloudinary.com/hzrulbrds/image/upload/v1582764388/thumbs/steve_tn_klcjkw.jpg",
      full: "https://res.cloudinary.com/hzrulbrds/image/upload/v1582763991/steve_w7mqee.jpg",
    },
    published_at: "2023-07-02T00:00:00+00:00",
  },
  {
    id: "S-4",
    name: "Pluto",
    type: "Fish",
    weight: 66.1,
    description:
      "Spend much of their time alone or in pairs, though they are sometimes seen gathered in large herds of a hundred animals.",
    photo: {
      thumb:
        "https://res.cloudinary.com/hzrulbrds/image/upload/v1582764388/thumbs/pluto_tn_z3d6hs.jpg",
      full: "https://res.cloudinary.com/hzrulbrds/image/upload/v1582764104/pluto_sbdj3l.jpg",
    },
    published_at: "2023-07-02T00:00:00+00:00",
  },
  {
    id: "R-1",
    name: "Pip",
    type: "Rabbit",
    description:
      "Furry mammals with long ears, short fluffy tails, and strong, large hind legs. They have 2 pairs of sharp incisors (front teeth), one pair on top and one pair on the bottom",
    weight: 3.7,
    photo: {
      thumb:
        "https://res.cloudinary.com/hzrulbrds/image/upload/v1582764388/thumbs/pip_tn_xhrimm.jpg",
      full: "https://res.cloudinary.com/hzrulbrds/image/upload/v1582764136/pip_o0snc2.jpg",
    },
    published_at: "2023-07-10T00:00:00+00:00",
  },
  {
    id: "R-2",
    name: "Sweetums",
    description:
      "Have 4 toes on their hind feet that are long and webbed to keep them from spreading apart as they jump.",
    type: "Rabbit",
    weight: 4.6,
    photo: {
      thumb:
        "https://res.cloudinary.com/hzrulbrds/image/upload/v1582764389/thumbs/sweetums_tn_zz3r4f.jpg",
      full: "https://res.cloudinary.com/hzrulbrds/image/upload/v1582764027/sweetums_prsppm.jpg",
    },
    published_at: "2023-07-10T00:00:00+00:00",
  },
  {
    id: "R-3",
    name: "Jerry",
    type: "Rabbit",
    weight: 5.5,
    description:
      "Can reach speeds of 35 to 45 miles per hour (56 to 72 kilometers per hour)",
    photo: {
      thumb:
        "https://res.cloudinary.com/hzrulbrds/image/upload/v1582764387/thumbs/jerry_tn_zdcmvm.jpg",
      full: "https://res.cloudinary.com/hzrulbrds/image/upload/v1582764083/jerry_drpooy.jpg",
    },
    published_at: "2023-07-10T00:00:00+00:00",
  },
  {
    id: "R-4",
    name: "Jason",
    type: "Rabbit",
    description: "Love to walk instead of hop",
    weight: 2.7,
    photo: {
      thumb:
        "https://res.cloudinary.com/hzrulbrds/image/upload/v1582764387/thumbs/jason_tn_fvjgiv.jpg",
      full: "https://res.cloudinary.com/hzrulbrds/image/upload/v1582764178/jason_yzb3sg.jpg",
    },
    published_at: "2023-09-18T00:00:00+00:00",
  },
  {
    id: "R-5",
    name: "Peep",
    description: "Born without fur and with closed eyes",
    type: "Rabbit",
    weight: 6.5,
    photo: {
      thumb:
        "https://res.cloudinary.com/hzrulbrds/image/upload/v1582764388/thumbs/peep_tn_z4ckwy.jpg",
      full: "https://res.cloudinary.com/hzrulbrds/image/upload/v1582764163/peep_g42p7k.jpg",
    },
    published_at: "2023-01-23T00:00:00+00:00",
  },
];

export default petList;
