window.TESTS = window.TESTS || {};
window.TESTS.relationship = {
  "meta": {
    "testId": "relationship_security_sources_v1",
    "title": "你的亲密关系安全感来源测试",
    "subtitle": "测出你在亲密关系里最需要的“安全感证据”（主×次混合型）",
    "language": "zh-CN",
    "version": "1.0.0",
    "estimatedTimeMinutes": 4,
    "questionCount": 24,
    "scale": {
      "type": "likert5",
      "choices": [
        {
          "value": 1,
          "label": "非常不符合"
        },
        {
          "value": 2,
          "label": "不太符合"
        },
        {
          "value": 3,
          "label": "一般"
        },
        {
          "value": 4,
          "label": "比较符合"
        },
        {
          "value": 5,
          "label": "非常符合"
        }
      ]
    },
    "disclaimer": "本测试用于自我探索与情绪价值表达，不构成心理/医学诊断或咨询建议。"
  },
  "dimensions": [
    {
      "code": "R",
      "name": "兑现可靠型",
      "shortName": "兑现可靠",
      "evidence": "说到做到、稳定出现、计划可预期",
      "coreNeed": "稳定与可预期",
      "commonTrigger": [
        "临时变卦",
        "承诺落空",
        "忽冷忽热",
        "临时失联"
      ],
      "askScripts": [
        "我更安心的是：我们能把计划提前确认一下，临时变化也提前跟我说。",
        "如果你要改约/加班，能不能尽量提前告诉我？我会更踏实。"
      ],
      "microRepairs": [
        "把“我想要”翻译成可执行动作（提前确认/提前通知/第二天仍按约出现）",
        "用2–4周观察持续性，而不是一次情绪就下结论"
      ]
    },
    {
      "code": "E",
      "name": "情绪回应型",
      "shortName": "情绪回应",
      "evidence": "被听懂、被共情、被认真对待感受",
      "coreNeed": "被理解与被看见",
      "commonTrigger": [
        "敷衍回应（嗯/哦）",
        "上来就讲道理",
        "否定感受",
        "冷处理"
      ],
      "askScripts": [
        "我现在更需要你先听我说完、理解我，再给建议。",
        "你可以先说一句你听到我在难过什么，然后我们再一起想办法。"
      ],
      "microRepairs": [
        "把指责换成请求：'你能不能先陪我2分钟再给建议？'",
        "把“希望的回应方式”写成说明书（先共情/再建议/最后确认）"
      ]
    },
    {
      "code": "C",
      "name": "在场陪伴型",
      "shortName": "在场陪伴",
      "evidence": "高质量相处、稳定联系频率、专注在一起",
      "coreNeed": "被放在心上",
      "commonTrigger": [
        "失联",
        "心不在焉",
        "约会刷手机",
        "联系频率骤降"
      ],
      "askScripts": [
        "我不需要一直聊，但我需要稳定的连接感，比如每天5分钟认真聊聊。",
        "我们能不能每周固定一个不被打扰的约会时间？"
      ],
      "microRepairs": [
        "设最低在场标准：每日5分钟专注通话/每周固定见面",
        "给自己排“空窗计划”（运动/朋友/兴趣）减少等待型焦虑"
      ]
    },
    {
      "code": "A",
      "name": "边界尊重型",
      "shortName": "边界尊重",
      "evidence": "不被控制、被尊重节奏、保留自我空间",
      "coreNeed": "关系里也能呼吸",
      "commonTrigger": [
        "查岗控制",
        "过度绑定",
        "情绪勒索",
        "不尊重节奏"
      ],
      "askScripts": [
        "我需要一点独处时间来恢复，这不代表我不爱你。",
        "我们可以透明，但不需要随时报备；我希望你尊重我的节奏。"
      ],
      "microRepairs": [
        "透明≠报备：只同步关键信息，不交出全部自由",
        "固定独处时段并提前说明：'我这段时间需要充电，之后我会来找你'"
      ]
    },
    {
      "code": "P",
      "name": "身体亲近型",
      "shortName": "身体亲近",
      "evidence": "拥抱牵手、身体接触、亲密动作",
      "coreNeed": "被触碰到的爱",
      "commonTrigger": [
        "被推开",
        "长期缺少亲密互动",
        "亲密被当作负担"
      ],
      "askScripts": [
        "我现在不需要解决方案，我需要一个抱抱。",
        "我们能不能每天都有一个小小的亲密动作，比如睡前10秒拥抱？"
      ],
      "microRepairs": [
        "把需求说具体：抱抱/牵手/靠一下，而不是“你都不爱我”",
        "建立每日微亲密：10秒拥抱/牵手30秒/出门亲一下"
      ]
    },
    {
      "code": "W",
      "name": "语言肯定型",
      "shortName": "语言肯定",
      "evidence": "明确表达在乎、赞美、确认关系",
      "coreNeed": "被说出来的爱",
      "commonTrigger": [
        "沉默回避",
        "关系模糊",
        "长期缺少肯定",
        "让你一直猜"
      ],
      "askScripts": [
        "对我来说，听到你说“我在/我爱你/谢谢你”会很有力量。",
        "你可以不频繁，但我希望我们每周有一次认真表达感受的时间。"
      ],
      "microRepairs": [
        "建立“肯定清单”（最在意的3句话）并告诉对方",
        "每周一次“确认感小仪式”（一句感谢+一句欣赏+一句在乎）"
      ]
    },
    {
      "code": "S",
      "name": "实际支持型",
      "shortName": "实际支持",
      "evidence": "分担、照顾、一起解决生活问题",
      "coreNeed": "我们是一队",
      "commonTrigger": [
        "只会哄不分担",
        "关键时刻掉链子",
        "把事都丢给你"
      ],
      "askScripts": [
        "我更需要我们一起把这件事分工解决，而不是只有安慰。",
        "你能帮我做其中一步吗？哪怕很小，我会觉得我们在一起。"
      ],
      "microRepairs": [
        "把分担拆到最小一步（今天做哪件/谁负责哪一步）",
        "及时认可对方的小支持，形成正反馈"
      ]
    },
    {
      "code": "G",
      "name": "未来规划型",
      "shortName": "未来规划",
      "evidence": "关系定位、共同计划、被纳入未来",
      "coreNeed": "方向与承诺感",
      "commonTrigger": [
        "长期暧昧",
        "回避承诺",
        "现实问题不谈",
        "公开与定位不清晰"
      ],
      "askScripts": [
        "我不是要你立刻给答案，我是想知道我们是不是同一个方向。",
        "我们可以先聊一个小里程碑：比如三个月后，我们希望关系到哪一步？"
      ],
      "microRepairs": [
        "用里程碑沟通（3个月/6个月）而不是一次谈到底",
        "讨论三件事：时间投入、公开程度、冲突处理方式"
      ]
    }
  ],
  "questions": [
    {
      "id": 1,
      "dim": "R",
      "text": "对方说到做到，比甜言蜜语更让我安心。",
      "reverse": false,
      "weight": 1
    },
    {
      "id": 2,
      "dim": "R",
      "text": "临时改计划、很晚才说，会让我明显不安。",
      "reverse": false,
      "weight": 1
    },
    {
      "id": 3,
      "dim": "R",
      "text": "就算吵架，只要他第二天仍然按约出现，我会更快稳定下来。",
      "reverse": false,
      "weight": 1
    },
    {
      "id": 4,
      "dim": "E",
      "text": "我难受时，他能先理解我的感受再给建议，我会很有安全感。",
      "reverse": false,
      "weight": 1
    },
    {
      "id": 5,
      "dim": "E",
      "text": "我更在意被“听懂”，而不是被“立刻解决”。",
      "reverse": false,
      "weight": 1
    },
    {
      "id": 6,
      "dim": "E",
      "text": "他能复述我在意的点/需求（哪怕不完全同意），会让我瞬间放松。",
      "reverse": false,
      "weight": 1
    },
    {
      "id": 7,
      "dim": "C",
      "text": "我需要比较稳定的联系/见面频率，否则容易胡思乱想。",
      "reverse": false,
      "weight": 1
    },
    {
      "id": 8,
      "dim": "C",
      "text": "在一起时他如果总刷手机/心不在焉，我会立刻没安全感。",
      "reverse": false,
      "weight": 1
    },
    {
      "id": 9,
      "dim": "C",
      "text": "就算一两周各忙各的，只要我知道他爱我，我也不会不安。",
      "reverse": true,
      "weight": 1
    },
    {
      "id": 10,
      "dim": "A",
      "text": "他尊重我的节奏（回复慢、需要独处），我会更安心。",
      "reverse": false,
      "weight": 1
    },
    {
      "id": 11,
      "dim": "A",
      "text": "我更喜欢对方随时掌握我在做什么，这会让我更安心。",
      "reverse": true,
      "weight": 1
    },
    {
      "id": 12,
      "dim": "A",
      "text": "即使很亲密，我也希望保留自己的朋友圈和空间。",
      "reverse": false,
      "weight": 1
    },
    {
      "id": 13,
      "dim": "P",
      "text": "拥抱/牵手往往比语言更快让我平静。",
      "reverse": false,
      "weight": 1
    },
    {
      "id": 14,
      "dim": "P",
      "text": "我会通过身体距离与亲密度判断关系是否稳定。",
      "reverse": false,
      "weight": 1
    },
    {
      "id": 15,
      "dim": "P",
      "text": "即使没时间聊天，睡前一个拥抱也能让我安心。",
      "reverse": false,
      "weight": 1
    },
    {
      "id": 16,
      "dim": "W",
      "text": "他一句“我在”“我懂你”，能让我的安全感迅速回升。",
      "reverse": false,
      "weight": 1
    },
    {
      "id": 17,
      "dim": "W",
      "text": "对方不太会表达喜欢/在乎，我也不会因此不安。",
      "reverse": true,
      "weight": 1
    },
    {
      "id": 18,
      "dim": "W",
      "text": "我需要被肯定（被欣赏/被感谢）来确认自己在这段关系里的价值。",
      "reverse": false,
      "weight": 1
    },
    {
      "id": 19,
      "dim": "S",
      "text": "他愿意在生活细节上帮我分担，会让我更有安全感。",
      "reverse": false,
      "weight": 1
    },
    {
      "id": 20,
      "dim": "S",
      "text": "我更看重“他能不能跟我一起解决问题”，而不是“只会哄我”。",
      "reverse": false,
      "weight": 1
    },
    {
      "id": 21,
      "dim": "S",
      "text": "生病/麻烦时他能主动安排或照顾，会让我很踏实。",
      "reverse": false,
      "weight": 1
    },
    {
      "id": 22,
      "dim": "G",
      "text": "我需要比较清晰的关系定位和未来方向，否则容易不安。",
      "reverse": false,
      "weight": 1
    },
    {
      "id": 23,
      "dim": "G",
      "text": "他把我纳入他的生活规划（见朋友/家庭/旅行等），我会更安心。",
      "reverse": false,
      "weight": 1
    },
    {
      "id": 24,
      "dim": "G",
      "text": "我不需要谈未来，顺其自然也能让我安心。",
      "reverse": true,
      "weight": 1
    }
  ],
  "scoring": {
    "reverseRule": "if reverse=true then score = 6 - answer",
    "dimensionAggregation": {
      "method": "sum",
      "itemsPerDimension": 3,
      "rawRange": [
        3,
        15
      ],
      "to100": "round((raw - 3) / 12 * 100)"
    },
    "ranking": {
      "primary": "highest raw dimension score",
      "secondary": "second highest raw dimension score",
      "mixThresholdRawDiff": 2,
      "mixRule": "if (primaryRaw - secondaryRaw) <= mixThresholdRawDiff then output as MIX(primary×secondary) else SINGLE(primary)"
    }
  },
  "results": {
    "type": "dimension_primary_or_mix",
    "singleTypes": {
      "R": {
        "code": "R",
        "name": "兑现可靠型",
        "tagline": "比起甜言蜜语，我更吃“说到做到”。",
        "comfort": "你要的不是被哄，而是被落实。你不是难搞，你只是对稳定更敏感。",
        "strengths": [
          "踏实、长期主义",
          "能把关系过成生活",
          "看重行动与一致性"
        ],
        "pitfalls": [
          "承诺落空/临时变卦会强烈触发不安",
          "容易把“失约”理解成“不在乎”"
        ],
        "repair": [
          "把需求写成行为规则：提前确认、临时变化提前沟通、次日仍按约出现",
          "用2–4周观察持续性，不被一次情绪带节奏"
        ],
        "shareCopy": "我的安全感来源是【兑现可靠型】——比起甜言蜜语，我更吃“说到做到”。",
        "poster": {
          "title": "安全感密码：兑现可靠",
          "subtitle": "我更需要稳定与可预期",
          "lines": [
            "我最吃：说到做到 / 稳定出现",
            "我的雷区：临时变卦 / 忽冷忽热",
            "修复关键词：提前确认 + 兑现承诺"
          ],
          "hashtags": [
            "#亲密关系",
            "#安全感",
            "#恋爱自测",
            "#沟通技巧"
          ],
          "footer": "仅供自我探索｜不构成诊断"
        }
      },
      "E": {
        "code": "E",
        "name": "情绪回应型",
        "tagline": "我想被听懂，不想被立刻修理。",
        "comfort": "你想要的不是完美答案，而是被认真对待的感受。",
        "strengths": [
          "细腻共情",
          "连接感强",
          "重视情绪质量"
        ],
        "pitfalls": [
          "敷衍/讲道理会让你快速降温",
          "容易在“没被理解”时升级冲突"
        ],
        "repair": [
          "给对方“回应脚本”：先共情、再建议、最后确认",
          "把指责换成请求：'你能不能先陪我2分钟？'"
        ],
        "shareCopy": "我的安全感来源是【情绪回应型】——我想被听懂，不想被立刻修理。",
        "poster": {
          "title": "安全感密码：情绪回应",
          "subtitle": "我更需要被理解与被看见",
          "lines": [
            "我最吃：先理解感受，再给建议",
            "我的雷区：敷衍嗯哦 / 否定情绪",
            "修复关键词：共情一句话 + 确认感"
          ],
          "hashtags": [
            "#亲密关系",
            "#情绪价值",
            "#沟通",
            "#恋爱自测"
          ],
          "footer": "仅供自我探索｜不构成诊断"
        }
      },
      "C": {
        "code": "C",
        "name": "在场陪伴型",
        "tagline": "我不怕忙，我怕你不在。",
        "comfort": "你在意的不是粘人，是被放在心上。",
        "strengths": [
          "会经营日常温度",
          "重视相处质量",
          "能创造连接感"
        ],
        "pitfalls": [
          "失联/心不在焉会强烈触发",
          "容易陷入等待型焦虑"
        ],
        "repair": [
          "设最低在场标准：每日5分钟专注通话/每周固定约会",
          "给自己排“空窗计划”，把注意力从等待拉回生活"
        ],
        "shareCopy": "我的安全感来源是【在场陪伴型】——我不怕忙，我怕你不在。",
        "poster": {
          "title": "安全感密码：在场陪伴",
          "subtitle": "我更需要稳定的连接感",
          "lines": [
            "我最吃：高质量陪伴 / 专注在一起",
            "我的雷区：失联 / 约会刷手机",
            "修复关键词：固定约会 + 专注5分钟"
          ],
          "hashtags": [
            "#亲密关系",
            "#陪伴",
            "#安全感",
            "#恋爱自测"
          ],
          "footer": "仅供自我探索｜不构成诊断"
        }
      },
      "A": {
        "code": "A",
        "name": "边界尊重型",
        "tagline": "爱我，也请尊重我的节奏。",
        "comfort": "你需要空间不是因为不爱，而是因为你清楚爱也要呼吸。",
        "strengths": [
          "独立清醒",
          "不易失自我",
          "关系更健康可持续"
        ],
        "pitfalls": [
          "被控制会迅速退缩",
          "容易被道德绑架为“冷淡”"
        ],
        "repair": [
          "透明≠报备：只同步关键信息，不交出全部自由",
          "固定独处时段并提前说明恢复时间"
        ],
        "shareCopy": "我的安全感来源是【边界尊重型】——爱我，也请尊重我的节奏。",
        "poster": {
          "title": "安全感密码：边界尊重",
          "subtitle": "关系里也要能呼吸",
          "lines": [
            "我最吃：尊重节奏 / 不被控制",
            "我的雷区：查岗 / 过度绑定",
            "修复关键词：边界说明书 + 透明不报备"
          ],
          "hashtags": [
            "#边界感",
            "#亲密关系",
            "#安全感",
            "#恋爱自测"
          ],
          "footer": "仅供自我探索｜不构成诊断"
        }
      },
      "P": {
        "code": "P",
        "name": "身体亲近型",
        "tagline": "一个拥抱，比一百句解释更有用。",
        "comfort": "你不是矫情，你只是更靠触碰感知爱。",
        "strengths": [
          "亲密直觉强",
          "投入度高",
          "容易建立温度"
        ],
        "pitfalls": [
          "被推开会很受伤",
          "长期缺少亲密互动会强烈不安"
        ],
        "repair": [
          "把需求说具体：抱抱/牵手/靠一下",
          "建立每日微亲密：10秒拥抱/牵手30秒"
        ],
        "shareCopy": "我的安全感来源是【身体亲近型】——一个拥抱，比一百句解释更有用。",
        "poster": {
          "title": "安全感密码：身体亲近",
          "subtitle": "我更靠触碰感知爱",
          "lines": [
            "我最吃：拥抱牵手 / 亲密小动作",
            "我的雷区：被推开 / 长期缺少亲密",
            "修复关键词：说具体 + 每日10秒拥抱"
          ],
          "hashtags": [
            "#亲密关系",
            "#安全感",
            "#抱抱",
            "#恋爱自测"
          ],
          "footer": "仅供自我探索｜不构成诊断"
        }
      },
      "W": {
        "code": "W",
        "name": "语言肯定型",
        "tagline": "我不怕现实，我怕你不说爱。",
        "comfort": "你需要被说出来的爱，不代表你不成熟——你只是对确认感更敏感。",
        "strengths": [
          "表达强",
          "会沟通",
          "会给予肯定"
        ],
        "pitfalls": [
          "沉默与模糊会让你反复猜",
          "容易把“不说”解读成“不爱”"
        ],
        "repair": [
          "建立“肯定清单”（最在意的3句）",
          "每周一次确认感小仪式（感谢+欣赏+在乎）"
        ],
        "shareCopy": "我的安全感来源是【语言肯定型】——我不怕现实，我怕你不说爱。",
        "poster": {
          "title": "安全感密码：语言肯定",
          "subtitle": "我更需要明确的确认感",
          "lines": [
            "我最吃：我在 / 我爱你 / 谢谢你",
            "我的雷区：沉默回避 / 关系模糊",
            "修复关键词：肯定清单 + 每周表达一次"
          ],
          "hashtags": [
            "#亲密关系",
            "#安全感",
            "#表达",
            "#恋爱自测"
          ],
          "footer": "仅供自我探索｜不构成诊断"
        }
      },
      "S": {
        "code": "S",
        "name": "实际支持型",
        "tagline": "我想要并肩，不想要独扛。",
        "comfort": "你要的不是依赖，而是“我们是一队”的踏实感。",
        "strengths": [
          "务实可靠",
          "擅长解决问题",
          "能并肩作战"
        ],
        "pitfalls": [
          "只会哄不分担会让你失望",
          "关键时刻掉链子会打击信任"
        ],
        "repair": [
          "把分担拆到最小一步（今天做哪件）",
          "及时认可对方的小支持，建立协作正循环"
        ],
        "shareCopy": "我的安全感来源是【实际支持型】——我想要并肩，不想要独扛。",
        "poster": {
          "title": "安全感密码：实际支持",
          "subtitle": "我更需要并肩解决问题",
          "lines": [
            "我最吃：分担 / 关键时刻不掉链",
            "我的雷区：只会哄不行动",
            "修复关键词：分工清单 + 小支持也算数"
          ],
          "hashtags": [
            "#亲密关系",
            "#安全感",
            "#共同成长",
            "#恋爱自测"
          ],
          "footer": "仅供自我探索｜不构成诊断"
        }
      },
      "G": {
        "code": "G",
        "name": "未来规划型",
        "tagline": "我不是要答案，我是要方向。",
        "comfort": "你不是催进度，你是在确认我们有没有同一个方向。",
        "strengths": [
          "认真长期主义",
          "会经营未来",
          "关系定位清晰"
        ],
        "pitfalls": [
          "长期暧昧会让你焦虑",
          "回避承诺会消耗信任"
        ],
        "repair": [
          "用里程碑沟通（3个月/6个月）而不是一次谈到底",
          "讨论：时间投入/公开程度/冲突处理方式"
        ],
        "shareCopy": "我的安全感来源是【未来规划型】——我不是要答案，我是要方向。",
        "poster": {
          "title": "安全感密码：未来规划",
          "subtitle": "我更需要方向与承诺感",
          "lines": [
            "我最吃：关系定位 / 共同计划",
            "我的雷区：长期暧昧 / 回避承诺",
            "修复关键词：里程碑沟通 + 方向一致"
          ],
          "hashtags": [
            "#亲密关系",
            "#安全感",
            "#恋爱观",
            "#恋爱自测"
          ],
          "footer": "仅供自我探索｜不构成诊断"
        }
      }
    },
    "mixTemplates": {
      "title": "安全感密码：{{primary.shortName}} × {{secondary.shortName}}",
      "subtitle": "主需求：{{primary.evidence}}｜加分项：{{secondary.evidence}}",
      "body": [
        "我最吃：{{primary.evidence}}",
        "我也需要：{{secondary.evidence}}",
        "雷区提醒：{{primary.commonTrigger[0]}} / {{primary.commonTrigger[1]}}",
        "修复关键词：{{primary.microRepairs[0]}} + {{secondary.microRepairs[0]}}"
      ],
      "shareCopy": "我的安全感密码是【{{primary.name}}×{{secondary.name}}】——主打{{primary.shortName}}，加分{{secondary.shortName}}。",
      "poster": {
        "title": "安全感密码：{{primary.shortName}}×{{secondary.shortName}}",
        "subtitle": "主需求：{{primary.coreNeed}}｜加分：{{secondary.coreNeed}}",
        "lines": [
          "我最吃：{{primary.evidence}}",
          "我也需要：{{secondary.evidence}}",
          "修复关键词：{{primary.microRepairs[0]}} + {{secondary.microRepairs[0]}}"
        ],
        "hashtags": [
          "#亲密关系",
          "#安全感",
          "#恋爱自测",
          "#沟通技巧"
        ],
        "footer": "仅供自我探索｜不构成诊断"
      }
    }
  },
  "share": {
    "captionTemplates": [
      "我测出来的安全感密码是【{{resultTitle}}】😭\n原来我不是作，我只是需要{{needLine}}。\n你也来测测👉（评论区/主页）\n\n{{hashtags}}",
      "测完有点被戳到：我最在意的是{{needLine}}。\n如果对方能做到这点，我真的会很安心。\n\n{{hashtags}}"
    ],
    "defaultHashtags": [
      "#亲密关系",
      "#安全感",
      "#恋爱自测",
      "#情绪价值",
      "#沟通"
    ]
  }
};
