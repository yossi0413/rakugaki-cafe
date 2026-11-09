const STORY = {
  "A01": {
    "chapter": "入店",
    "text": "……いらっしゃい。",
    "choices": [
      {
        "label": "こんにちは。",
        "to": "A02"
      },
      {
        "label": "どうも。",
        "to": "A02"
      }
    ],
    "subject": "らくがきコードのご案内",
    "replyMode": "quick"
  },
  "A02": {
    "chapter": "席へ",
    "text": "……こちら、どうぞ。",
    "choices": [
      {
        "label": "席に座る",
        "to": "A03"
      }
    ],
    "subject": "らくがきコードのご案内",
    "replyMode": "quick"
  },
  "A03": {
    "chapter": "来た理由",
    "text": "らくがきコードのことを\n聞きに来たんですか？",
    "choices": [
      {
        "label": "そうです。",
        "to": "A04"
      },
      {
        "label": "なんとなく入りました。",
        "to": "A05"
      },
      {
        "label": "もうDiscordに参加していて、聞きたいことがあります。",
        "to": "A06"
      }
    ],
    "subject": "らくがきコードのご案内",
    "replyMode": "confirm"
  },
  "A04": {
    "chapter": "案内を希望",
    "text": "では、少しご紹介しますね。",
    "choices": [
      {
        "label": "お願いします。",
        "to": "A04b"
      }
    ],
    "subject": "らくがきコードのご案内",
    "replyMode": "quick"
  },
  "A05": {
    "chapter": "偶然の来店",
    "text": "そうでしたか。\nここでは、らくがきコードの案内もしているんです。",
    "choices": [
      {
        "label": "らくがきコードは、どんなところですか？",
        "to": "A07"
      },
      {
        "label": "少し見ていってもいいですか？",
        "to": "A05b"
      }
    ],
    "subject": "らくがきコードのご案内",
    "replyMode": "confirm"
  },
  "A05b": {
    "chapter": "ひと休み",
    "text": "ええ、どうぞ。\n気になることがあれば、お声がけください。",
    "choices": [
      {
        "label": "やっぱり、らくがきコードのことを聞きたいです。",
        "to": "A07"
      },
      {
        "label": "聞けることを見てみる",
        "to": "M01"
      }
    ],
    "subject": "らくがきコードのご案内",
    "replyMode": "confirm"
  },
  "A06": {
    "chapter": "参加済み",
    "text": "そうでしたか。\nもしかして、前にもこちらへ？",
    "choices": [
      {
        "label": "はい。前にも来ました。",
        "to": "A06a"
      },
      {
        "label": "ここで案内を聞くのは、初めてです。",
        "to": "A06b"
      }
    ],
    "mode": "free",
    "subject": "らくがきコードのご案内",
    "replyMode": "confirm"
  },
  "A07": {
    "chapter": "最初の紹介",
    "text": "らくがきコードは、AIと一緒にプログラミングをして、\nアイデアを形にするコミュニティです。",
    "choices": [
      {
        "label": "へえ。",
        "to": "A08"
      },
      {
        "label": "なるほど。",
        "to": "A08"
      }
    ],
    "subject": "らくがきコードのご案内",
    "replyMode": "quick"
  },
  "A08": {
    "chapter": "最初の紹介・続き",
    "text": "メンバー同士で、つくった作品を見せ合ったり、相談したり。\n勉強会やイベントも開いています。",
    "choices": [
      {
        "label": "どんなことを大切にしているんですか？",
        "to": "V01"
      },
      {
        "label": "どんな活動をしているんですか？",
        "to": "B01"
      }
    ],
    "complete": "intro",
    "subject": "らくがきコードのご案内",
    "replyMode": "confirm"
  },
  "V01": {
    "chapter": "VSTへの入口",
    "text": "らくがきコードでは、つくって試すだけでなく、\n人に見せたり、つくったものを振り返ったりもします。",
    "choices": [
      {
        "label": "……というと？",
        "to": "V02"
      }
    ],
    "subject": "大切にしていること",
    "replyMode": "quick"
  },
  "V02": {
    "chapter": "三つの名前",
    "text": "私たちが大切にしているのは、Vibe、Share、Thinkの三つ。\n一つずつ、ご紹介しますね。",
    "choices": [
      {
        "label": "はい。",
        "to": "V03"
      },
      {
        "label": "お願いします。",
        "to": "V03"
      }
    ],
    "subject": "大切にしていること",
    "replyMode": "quick"
  },
  "V03": {
    "chapter": "Vibe",
    "text": "Vibeは、まずはつくってみること。\nプログラミングを完璧に覚える前に、小さく試してみます。",
    "choices": [
      {
        "label": "まずは、やってみるんですね。",
        "to": "V06"
      },
      {
        "label": "なるほど。",
        "to": "V06"
      }
    ],
    "subject": "大切にしていること",
    "replyMode": "quick"
  },
  "V04": {
    "chapter": "Thinkへのつなぎ",
    "text": "そうしてつくったものを、\nそのままにせず、問い直すのがThinkです。",
    "choices": [
      {
        "label": "どんなことを確かめるんですか？",
        "to": "V05"
      }
    ],
    "subject": "大切にしていること",
    "replyMode": "quick"
  },
  "V05": {
    "chapter": "Think",
    "text": "正しく動くか、安全に使えるか。\n誰かを傷つけないか、といったことですね。",
    "choices": [
      {
        "label": "確かに、大切ですね。",
        "to": "V08"
      },
      {
        "label": "なるほど。",
        "to": "V08"
      }
    ],
    "subject": "大切にしていること",
    "replyMode": "quick"
  },
  "V06": {
    "chapter": "Shareへのつなぎ",
    "text": "そして、つくったものや、困ったことを持ち寄る。\nそれが、次のShareです。",
    "choices": [
      {
        "label": "完成していなくても、話していいんですか？",
        "to": "V07"
      }
    ],
    "subject": "大切にしていること",
    "replyMode": "quick"
  },
  "V07": {
    "chapter": "Share",
    "text": "ええ。アイデアも、途中のつまずきも。\n「わからない」も「できた」も、共有します。",
    "choices": [
      {
        "label": "それなら、相談しやすそうです。",
        "to": "V07_REPLY"
      },
      {
        "label": "なるほど。",
        "to": "V04"
      }
    ],
    "subject": "大切にしていること",
    "replyMode": "confirm"
  },
  "V08": {
    "chapter": "活動へのつなぎ",
    "text": "AIに任せきりにせず、人が考えて確かめる。\nそんな姿勢も、大切にしています。",
    "choices": [
      {
        "label": "ほかの案内も聞きたいです。",
        "to": "REVIEW"
      }
    ],
    "complete": "values",
    "subject": "大切にしていること",
    "replyMode": "quick"
  },
  "B01": {
    "chapter": "活動の紹介",
    "text": "らくがきコードの活動をご紹介しますね。\n定例会議、勉強会、それからイベントがあります。",
    "choices": [
      {
        "label": "一つずつ教えてください。",
        "to": "B10"
      }
    ],
    "subject": "らくがきコードの活動",
    "replyMode": "quick"
  },
  "B05": {
    "chapter": "オンラインの交流へ",
    "text": "ええ。集まる日以外にも、Discordで作品や相談を持ち寄ります。\n「作品自慢」には、いろいろな作品が投稿されています。",
    "choices": [
      {
        "label": "ほかの案内も聞きたいです。",
        "to": "REVIEW"
      }
    ],
    "complete": "activities",
    "subject": "らくがきコードの活動",
    "replyMode": "quick"
  },
  "D01": {
    "chapter": "Discordを直接聞いた場合",
    "text": "らくがきコードの普段のやり取りには、\nDiscordというコミュニケーションツールを使っています。",
    "choices": [
      {
        "label": "なるほど。",
        "to": "D02"
      },
      {
        "label": "そうなんですね。",
        "to": "D02"
      }
    ],
    "subject": "Discordの使い方",
    "replyMode": "quick"
  },
  "D02": {
    "chapter": "経験を聞く",
    "text": "Discordを使ったことはありますか？",
    "choices": [
      {
        "label": "使ったことがあります。",
        "to": "D03"
      },
      {
        "label": "まだ使ったことがありません。",
        "to": "D04"
      }
    ],
    "subject": "Discordの使い方",
    "replyMode": "confirm"
  },
  "D03": {
    "chapter": "経験者への応答",
    "text": "Discordの基本の説明は、省きますね。\n次は、らくがきコードについての案内を続けます。",
    "choices": [
      {
        "label": "お願いします。",
        "to": "REVIEW"
      }
    ],
    "complete": "discord",
    "subject": "Discordの使い方",
    "replyMode": "quick"
  },
  "D04": {
    "chapter": "未経験者への応答",
    "text": "Discordでは、「チャンネル」という部屋を選んで\n話します。画面の一覧をご覧ください。",
    "choices": [
      {
        "label": "チャンネルは、どういうものですか？",
        "to": "D05"
      }
    ],
    "subject": "Discordの使い方",
    "map": {
      "group": "square",
      "channels": []
    },
    "replyMode": "quick"
  },
  "D05": {
    "chapter": "チャンネルの基本",
    "text": "「井戸端会議場」や「相談室」が、チャンネルです。\n名前を選ぶと、その部屋の会話を読めます。",
    "choices": [
      {
        "label": "なるほど。",
        "to": "D05a"
      },
      {
        "label": "部屋を選んで、話すんですね。",
        "to": "D05a"
      }
    ],
    "subject": "Discordの使い方",
    "map": {
      "group": "square",
      "channels": [
        "井戸端会議場"
      ]
    },
    "replyMode": "quick"
  },
  "D06": {
    "chapter": "ロールへのつなぎ",
    "text": "今度は、Discordの「ロール」のお話です。\nロールは、メンバーに付く目印です。",
    "choices": [
      {
        "label": "どんな目印なんですか？",
        "to": "D07"
      }
    ],
    "subject": "Discordの使い方",
    "replyMode": "quick"
  },
  "D07": {
    "chapter": "ロールの基本",
    "text": "ロールは、運営や参加者といった関わり方を示すほか、\nお知らせの呼びかけ先にも使います。",
    "choices": [
      {
        "label": "このサーバーのことも知りたいです。",
        "to": "REVIEW"
      }
    ],
    "complete": "discord",
    "subject": "Discordの使い方",
    "replyMode": "quick"
  },
  "R01": {
    "chapter": "めいんちゅ",
    "text": "らくがきコードの運営メンバーが「めいんちゅ」です。\nメインメンバー、という意味です。",
    "choices": [
      {
        "label": "なるほど。",
        "to": "R01a"
      },
      {
        "label": "呼び名が面白いですね。",
        "to": "R01a"
      }
    ],
    "subject": "らくがきコードのメンバー",
    "replyMode": "quick"
  },
  "R02": {
    "chapter": "さぶめんちゅ",
    "text": "運営には携わらず、勉強会やイベントなどに\n継続して参加するサブメンバーが「さぶめんちゅ」です。",
    "choices": [
      {
        "label": "なるほど。",
        "to": "R03b"
      },
      {
        "label": "関わり方で分かれているんですね。",
        "to": "R03b"
      }
    ],
    "subject": "らくがきコードのメンバー",
    "replyMode": "quick"
  },
  "R03b": {
    "chapter": "まとめた呼び名へ",
    "text": "この二つを合わせた呼び名が、\n「めんちゅ」です。",
    "choices": [
      {
        "label": "「めいんちゅ」とは、違うんですね。",
        "to": "R04"
      },
      {
        "label": "なるほど。",
        "to": "R05"
      }
    ],
    "subject": "らくがきコードのメンバー",
    "replyMode": "confirm"
  },
  "R04": {
    "chapter": "めんちゅ",
    "text": "ええ。めいんちゅは運営の人たち。\nめんちゅは、めいんちゅとさぶめんちゅを合わせた呼び名です。",
    "choices": [
      {
        "label": "わかりました。",
        "to": "R05"
      },
      {
        "label": "少し似ていますね。",
        "to": "R04a"
      }
    ],
    "subject": "らくがきコードのメンバー",
    "replyMode": "confirm"
  },
  "R05": {
    "chapter": "メンション",
    "text": "運営からイベントのお知らせなどを届けるときは、\n「めんちゅ」宛てにメンションを送ります。",
    "choices": [
      {
        "label": "メンションは、どういうものですか？",
        "to": "R06"
      },
      {
        "label": "なるほど。",
        "to": "R09"
      }
    ],
    "subject": "らくがきコードのメンバー",
    "replyMode": "confirm"
  },
  "R06": {
    "chapter": "メンションの説明",
    "text": "メンションは、宛先を付けて呼びかける機能です。\n運営が、めんちゅのみなさんへのお知らせに使います。",
    "choices": [
      {
        "label": "わかりました。",
        "to": "R09"
      }
    ],
    "subject": "らくがきコードのメンバー",
    "replyMode": "quick"
  },
  "R07": {
    "chapter": "詳しいロール・創立者",
    "text": "初期の4人のメンバーは「はじめんちゅ」です。",
    "choices": [
      {
        "label": "どんな人たちなのか、知りたいです。",
        "to": "R07a"
      },
      {
        "label": "ほかの呼び名も教えてください。",
        "to": "R07b"
      }
    ],
    "subject": "らくがきコードのメンバー",
    "replyMode": "confirm"
  },
  "R08": {
    "chapter": "詳しいロール・サポーター",
    "text": "SNS運用や連携先との活動などを\n支えてくださる方々は「さぽんちゅ」です。",
    "choices": [
      {
        "label": "いろいろな関わり方があるんですね。",
        "to": "R08a"
      }
    ],
    "subject": "らくがきコードのメンバー",
    "replyMode": "quick"
  },
  "R09": {
    "chapter": "本筋に戻る",
    "text": "これで、メンバーの主な呼び名のご紹介は終わりです。",
    "choices": [
      {
        "label": "ほかの案内も聞きたいです。",
        "to": "REVIEW"
      },
      {
        "label": "ほかの呼び名も知りたいです。",
        "to": "R07"
      }
    ],
    "complete": "roles",
    "subject": "らくがきコードのメンバー",
    "replyMode": "confirm"
  },
  "C01": {
    "chapter": "チャンネル案内の入口",
    "text": "ここからは、Discordのカテゴリとチャンネルのお話です。\n初めての方には、上から順にご案内します。",
    "choices": [
      {
        "label": "お願いします。",
        "to": "C10"
      }
    ],
    "subject": "Discordのカテゴリとチャンネル",
    "map": {
      "group": "compass",
      "channels": []
    },
    "replyMode": "quick"
  },
  "C10": {
    "chapter": "羅針盤・入口",
    "text": "まずは、大事なお知らせを確認する場所から。\n「羅針盤」というカテゴリに入っています。",
    "choices": [
      {
        "label": "なるほど。",
        "to": "C10a"
      },
      {
        "label": "お願いします。",
        "to": "C10a"
      }
    ],
    "subject": "Discordのカテゴリとチャンネル",
    "map": {
      "group": "compass",
      "channels": []
    },
    "replyMode": "quick"
  },
  "C11": {
    "chapter": "全体連絡の投稿権限",
    "text": "「全体連絡」に投稿できるのは、めいんちゅだけです。\nほかのみなさんには、連絡を確認してもらう場所ですね。",
    "choices": [
      {
        "label": "わかりました。ほかのお知らせも知りたいです。",
        "to": "C12"
      }
    ],
    "subject": "Discordのカテゴリとチャンネル",
    "map": {
      "group": "compass",
      "channels": [
        "全体連絡"
      ]
    },
    "replyMode": "quick"
  },
  "C12": {
    "chapter": "イベント告知",
    "text": "「らくがきイベント告知」は、\nらくがきコードのイベントをお知らせする場所です。",
    "choices": [
      {
        "label": "なるほど。",
        "to": "C13"
      },
      {
        "label": "開催のお知らせは、そこで見るんですね。",
        "to": "C13"
      }
    ],
    "subject": "Discordのカテゴリとチャンネル",
    "map": {
      "group": "compass",
      "channels": [
        "らくがきイベント告知"
      ]
    },
    "replyMode": "quick"
  },
  "C13": {
    "chapter": "自己紹介への導線",
    "text": "同じカテゴリには「自己紹介」もあります。\n参加したら、ぜひひと言、書いてみてください。",
    "choices": [
      {
        "label": "どんなことを書いたらいいですか？",
        "to": "C13a"
      },
      {
        "label": "わかりました。",
        "to": "C14"
      }
    ],
    "task": "intro",
    "subject": "Discordのカテゴリとチャンネル",
    "map": {
      "group": "compass",
      "channels": [
        "自己紹介"
      ]
    },
    "replyMode": "confirm"
  },
  "C14": {
    "chapter": "管理用途の二つ",
    "text": "「ロール」は、色のロールを付けるための管理用。\n「玄関」には、サーバーへの入室ログが残ります。",
    "choices": [
      {
        "label": "続きをお願いします。",
        "to": "CATEGORY_END"
      }
    ],
    "complete": "compass",
    "subject": "Discordのカテゴリとチャンネル",
    "map": {
      "group": "compass",
      "channels": [
        "ロール",
        "玄関"
      ]
    },
    "replyMode": "quick"
  },
  "C20": {
    "chapter": "広場・雑談",
    "text": "次は、交流の場所をまとめた「広場」です。\n「井戸端会議場」は、メンバーが雑談するチャンネルです。",
    "choices": [
      {
        "label": "どこに書くか迷ったときも、そこでいいですか？",
        "to": "C21"
      },
      {
        "label": "ほかのチャンネルも教えてください。",
        "to": "C22"
      }
    ],
    "subject": "Discordのカテゴリとチャンネル",
    "map": {
      "group": "square",
      "channels": [
        "井戸端会議場"
      ]
    },
    "replyMode": "confirm"
  },
  "C21": {
    "chapter": "困ったら井戸端へ",
    "text": "ええ。投稿先に迷ったら「井戸端会議場」でどうぞ。\n……話のきっかけにも、なりますから。",
    "choices": [
      {
        "label": "ほかのチャンネルも教えてください。",
        "to": "C22"
      }
    ],
    "subject": "Discordのカテゴリとチャンネル",
    "map": {
      "group": "square",
      "channels": [
        "井戸端会議場"
      ]
    },
    "replyMode": "quick"
  },
  "C22": {
    "chapter": "いまいます",
    "text": "「いまいます」には、めいんちゅが作業のときに\n「○○にいます」「○○に行きます」と投稿しています。",
    "choices": [
      {
        "label": "居場所を知らせるんですね。",
        "to": "C23"
      },
      {
        "label": "なるほど。",
        "to": "C23"
      }
    ],
    "subject": "Discordのカテゴリとチャンネル",
    "map": {
      "group": "square",
      "channels": [
        "いまいます"
      ]
    },
    "replyMode": "quick"
  },
  "C23": {
    "chapter": "外部イベントへのつなぎ",
    "text": "それから、「外部イベント宣伝」。\nらくがきコード以外のイベントを紹介する場所です。",
    "choices": [
      {
        "label": "自分が告知したいものも、投稿していいですか？",
        "to": "C24"
      },
      {
        "label": "なるほど。",
        "to": "C25"
      }
    ],
    "subject": "Discordのカテゴリとチャンネル",
    "map": {
      "group": "square",
      "channels": [
        "外部イベント宣伝"
      ]
    },
    "replyMode": "confirm"
  },
  "C24": {
    "chapter": "外部イベント宣伝",
    "text": "ええ。「外部イベント宣伝」へ。\nみなさんが告知したいイベントも、そこに送れます。",
    "choices": [
      {
        "label": "なるほど。",
        "to": "C25"
      },
      {
        "label": "覚えておきます。",
        "to": "C25"
      }
    ],
    "subject": "Discordのカテゴリとチャンネル",
    "map": {
      "group": "square",
      "channels": [
        "外部イベント宣伝"
      ]
    },
    "replyMode": "quick"
  },
  "C25": {
    "chapter": "募集",
    "text": "イベント以外のお誘いなら「なんでも募集」へ。\n旅行や遊びなどの募集に使います。",
    "choices": [
      {
        "label": "なるほど。",
        "to": "C26"
      },
      {
        "label": "覚えておきます。",
        "to": "C26"
      }
    ],
    "subject": "Discordのカテゴリとチャンネル",
    "map": {
      "group": "square",
      "channels": [
        "なんでも募集"
      ]
    },
    "replyMode": "quick"
  },
  "C26": {
    "chapter": "写真館",
    "text": "活動の写真を共有する「写真館」もあります。",
    "choices": [
      {
        "label": "わかりました。",
        "to": "CATEGORY_END"
      },
      {
        "label": "次もお願いします。",
        "to": "CATEGORY_END"
      }
    ],
    "complete": "square",
    "subject": "Discordのカテゴリとチャンネル",
    "map": {
      "group": "square",
      "channels": [
        "写真館"
      ]
    },
    "replyMode": "quick"
  },
  "C30": {
    "chapter": "知恵袋・アイデア",
    "text": "作品や学びの話をする場所が「知恵袋」です。\n「作品の卵」には、アイデアを自由に投げてみてください。",
    "choices": [
      {
        "label": "アイデアだけでも、いいんですね。",
        "to": "C31"
      },
      {
        "label": "なるほど。",
        "to": "C31"
      }
    ],
    "subject": "Discordのカテゴリとチャンネル",
    "map": {
      "group": "knowledge",
      "channels": [
        "作品の卵"
      ]
    },
    "replyMode": "quick"
  },
  "C31": {
    "chapter": "途中のアイデア",
    "text": "まだ形になっていないアイデアでも、大丈夫です。\n……話してみると、続きが浮かぶかもしれませんね。",
    "choices": [
      {
        "label": "なるほど。",
        "to": "C32"
      },
      {
        "label": "次もお願いします。",
        "to": "C32"
      }
    ],
    "subject": "Discordのカテゴリとチャンネル",
    "map": {
      "group": "knowledge",
      "channels": [
        "作品の卵"
      ]
    },
    "replyMode": "quick"
  },
  "C32": {
    "chapter": "相談室",
    "text": "作品づくりや、AIの使い方で困ったら「相談室」へ。\n相談したいことを書いてみてください。",
    "choices": [
      {
        "label": "なるほど。",
        "to": "C33"
      },
      {
        "label": "覚えておきます。",
        "to": "C33"
      }
    ],
    "subject": "Discordのカテゴリとチャンネル",
    "map": {
      "group": "knowledge",
      "channels": [
        "相談室"
      ]
    },
    "replyMode": "quick"
  },
  "C33": {
    "chapter": "作品自慢",
    "text": "できた作品は「作品自慢」で共有できます。\n「作品自慢」は、話題ごとに投稿を作るフォーラムです。",
    "choices": [
      {
        "label": "なるほど。",
        "to": "C34"
      },
      {
        "label": "できたら、見せてみたいです。",
        "to": "C34"
      },
      {
        "label": "フォーラムは、普通のチャンネルとどう違うんですか？",
        "to": "C33a"
      }
    ],
    "subject": "Discordのカテゴリとチャンネル",
    "map": {
      "group": "knowledge",
      "channels": [
        "作品自慢"
      ]
    },
    "replyMode": "confirm"
  },
  "C34": {
    "chapter": "ニュースシェア",
    "text": "それから「ニュースシェア」も。\n気になったニュースを、持ち寄る場所です。",
    "choices": [
      {
        "label": "わかりました。",
        "to": "CATEGORY_END"
      },
      {
        "label": "次もお願いします。",
        "to": "CATEGORY_END"
      }
    ],
    "complete": "knowledge",
    "subject": "Discordのカテゴリとチャンネル",
    "map": {
      "group": "knowledge",
      "channels": [
        "ニュースシェア"
      ]
    },
    "replyMode": "quick"
  },
  "C40": {
    "chapter": "会議",
    "text": "次は、運営の話し合いを見る場所です。\n「会議」というカテゴリに、毎週の会議のチャンネルがあります。",
    "choices": [
      {
        "label": "運営の話し合いも、見ることができるんですか？",
        "to": "C41"
      }
    ],
    "subject": "Discordのカテゴリとチャンネル",
    "map": {
      "group": "meetings",
      "channels": []
    },
    "replyMode": "quick"
  },
  "C41": {
    "chapter": "会議の公開性",
    "text": "ええ。「会議」のチャンネルでは、めいんちゅが\n何を話し合っているか、オープンに見られます。",
    "choices": [
      {
        "label": "なるほど。",
        "to": "C42"
      },
      {
        "label": "見てみたいです。",
        "to": "C42"
      }
    ],
    "subject": "Discordのカテゴリとチャンネル",
    "map": {
      "group": "meetings",
      "channels": []
    },
    "replyMode": "quick"
  },
  "C42": {
    "chapter": "勉強会・イベント",
    "text": "勉強会やイベントの個別連絡は、\n「勉強会・イベント」というカテゴリに届きます。",
    "choices": [
      {
        "label": "なるほど。",
        "to": "C43"
      },
      {
        "label": "次もお願いします。",
        "to": "C43"
      }
    ],
    "subject": "Discordのカテゴリとチャンネル",
    "map": {
      "group": "study",
      "channels": []
    },
    "replyMode": "quick"
  },
  "C43": {
    "chapter": "連携",
    "text": "連携している活動の連絡をまとめた場所もあります。\nそれが、画面の「連携」というカテゴリです。",
    "choices": [
      {
        "label": "わかりました。",
        "to": "CATEGORY_END"
      },
      {
        "label": "なるほど。",
        "to": "CATEGORY_END"
      }
    ],
    "complete": "meetings",
    "subject": "Discordのカテゴリとチャンネル",
    "map": {
      "group": "partners",
      "channels": []
    },
    "replyMode": "quick"
  },
  "C50": {
    "chapter": "チャンネル以外",
    "text": "チャンネルのほかに、\n「イベント」や「メンバー」などの項目もあります。",
    "choices": [
      {
        "label": "「イベント」について教えてください。",
        "to": "C51"
      },
      {
        "label": "「メンバー」について教えてください。",
        "to": "C52"
      },
      {
        "label": "サーバーブーストは、何ですか？",
        "to": "C53"
      },
      {
        "label": "「チャンネル＆ロール」について知りたいです。",
        "to": "C54"
      }
    ],
    "subject": "Discordのカテゴリとチャンネル",
    "replyMode": "confirm"
  },
  "C51": {
    "chapter": "イベント機能・確認待ち",
    "text": "こちらの詳しい案内は、準備中です。",
    "choices": [
      {
        "label": "ほかの項目も知りたいです。",
        "to": "C50"
      }
    ],
    "note": "実際の運用・画面と説明内容を確認してから追加。",
    "subject": "Discordのカテゴリとチャンネル",
    "replyMode": "quick"
  },
  "C52": {
    "chapter": "メンバー機能・確認待ち",
    "text": "こちらの詳しい案内は、準備中です。",
    "choices": [
      {
        "label": "ほかの項目も知りたいです。",
        "to": "C50"
      }
    ],
    "note": "実際の運用・画面と説明内容を確認してから追加。",
    "subject": "Discordのカテゴリとチャンネル",
    "replyMode": "quick"
  },
  "C53": {
    "chapter": "ブースト・確認待ち",
    "text": "こちらの詳しい案内は、準備中です。",
    "choices": [
      {
        "label": "ほかの項目も知りたいです。",
        "to": "C50"
      }
    ],
    "note": "実際の運用・画面と説明内容を確認してから追加。",
    "subject": "Discordのカテゴリとチャンネル",
    "replyMode": "quick"
  },
  "C54": {
    "chapter": "チャンネル＆ロール・変更待ち",
    "text": "こちらの詳しい案内は、準備中です。",
    "choices": [
      {
        "label": "ほかの項目も知りたいです。",
        "to": "C50"
      }
    ],
    "note": "実際の運用・画面と説明内容を確認してから追加。",
    "subject": "Discordのカテゴリとチャンネル",
    "replyMode": "quick"
  },
  "J01": {
    "chapter": "参加後へ",
    "text": "Discordに戻ってやってみることを、\n画面上の「やることメモ」にまとめておきますね。",
    "choices": [
      {
        "label": "メモを見せてください。",
        "to": "J07"
      }
    ],
    "cue": "tasks",
    "subject": "Discordに戻ってやること",
    "replyMode": "quick"
  },
  "J02": {
    "chapter": "自己紹介の内容",
    "text": "「自己紹介」には、呼ばれたい名前や興味のあることを。\nAIと一緒に作ってみたいものなども、ぜひ。",
    "choices": [
      {
        "label": "書いてみます。",
        "to": "J05"
      },
      {
        "label": "少し考えてみます。",
        "to": "J06"
      }
    ],
    "subject": "Discordに戻ってやること",
    "replyMode": "confirm"
  },
  "J03": {
    "chapter": "見て回る",
    "text": "ええ。気になるところから、どうぞ。\n迷ったら「井戸端会議場」で聞いてみてください。",
    "choices": [
      {
        "label": "ありがとうございます。",
        "to": "GUIDE_END"
      },
      {
        "label": "もう少し聞きたいことがあります。",
        "to": "M01"
      }
    ],
    "subject": "Discordに戻ってやること",
    "replyMode": "confirm"
  },
  "J04": {
    "chapter": "未参加者の出口",
    "text": "Discordに戻って、気になる場所をのぞいてみてください。\n迷ったときは「井戸端会議場」で聞いてみると。",
    "choices": [
      {
        "label": "ありがとうございます。",
        "to": "GUIDE_END"
      },
      {
        "label": "もう少し話を聞きたいです。",
        "to": "M01"
      }
    ],
    "note": "主導線はDiscord参加→歓迎メンション→案内所。招待リンクの再取得は求めない。",
    "subject": "Discordに戻ってやること",
    "replyMode": "confirm"
  },
  "J05": {
    "chapter": "自己紹介を書く人への応答",
    "text": "ええ。ぜひ。",
    "choices": [
      {
        "label": "ほかにも、やってみることはありますか？",
        "to": "J08"
      }
    ],
    "subject": "Discordに戻ってやること",
    "replyMode": "quick"
  },
  "J06": {
    "chapter": "自己紹介を考える人への応答",
    "text": "ええ。書きたいことが浮かんだら。",
    "choices": [
      {
        "label": "ほかにも、やってみることはありますか？",
        "to": "J08"
      }
    ],
    "subject": "Discordに戻ってやること",
    "replyMode": "quick"
  },
  "Z01": {
    "chapter": "長く話した後のお見送り",
    "text": "……少し、しゃべりすぎました。\nお付き合いいただいて、ありがとうございます。",
    "choices": [
      {
        "label": "いえ、聞けてよかったです。",
        "to": "Z02"
      },
      {
        "label": "また、聞きに来ます。",
        "to": "Z02"
      }
    ],
    "subject": "らくがきコードのご案内",
    "replyMode": "quick"
  },
  "Z02": {
    "chapter": "お見送り",
    "text": "……また、いつでも。",
    "choices": [
      {
        "label": "もう少し話を聞く",
        "to": "M01"
      },
      {
        "label": "最初に戻る",
        "to": "A01"
      }
    ],
    "subject": "らくがきコードのご案内",
    "replyMode": "confirm"
  },
  "M01": {
    "chapter": "自由に聞く入口",
    "text": "何をお話ししましょうか。",
    "choices": [
      {
        "label": "らくがきコードについて教えてください。",
        "to": "A07"
      },
      {
        "label": "大切にしていることを教えてください。",
        "to": "V01"
      },
      {
        "label": "活動について教えてください。",
        "to": "B01"
      },
      {
        "label": "Discordについて教えてください。",
        "to": "D00"
      },
      {
        "label": "メンバーの呼び名を教えてください。",
        "to": "R00"
      },
      {
        "label": "チャンネルについて教えてください。",
        "to": "CATEGORY_MENU"
      },
      {
        "label": "案内の後にやることを見たいです。",
        "to": "J01"
      }
    ],
    "subject": "らくがきコードのご案内",
    "replyMode": "confirm"
  },
  "A04b": {
    "chapter": "ご案内",
    "choices": [
      {
        "label": "初めてです。",
        "to": "A04c"
      },
      {
        "label": "前にも案内を聞きました。",
        "to": "A04d"
      }
    ],
    "text": "こちらの案内は、初めてですか？",
    "subject": "らくがきコードのご案内",
    "replyMode": "confirm"
  },
  "A04c": {
    "chapter": "ご案内",
    "choices": [
      {
        "label": "お願いします。",
        "to": "AOP1"
      }
    ],
    "text": "では、最初に操作のことを少し。\nお話は、下に出る返事のボタンを選ぶと進みます。",
    "mode": "first",
    "subject": "らくがきコードのご案内",
    "replyMode": "quick"
  },
  "A04d": {
    "chapter": "ご案内",
    "choices": [
      {
        "label": "聞きたい話題を選ぶ",
        "to": "M01"
      }
    ],
    "text": "では、気になるお話からどうぞ。",
    "mode": "free",
    "subject": "らくがきコードのご案内",
    "replyMode": "quick"
  },
  "A06a": {
    "chapter": "ご案内",
    "choices": [
      {
        "label": "聞きたい話題を選ぶ",
        "to": "M01"
      }
    ],
    "text": "またお越しいただけて、うれしいです。\n今日は、何をお話ししましょう。",
    "subject": "らくがきコードのご案内",
    "replyMode": "quick"
  },
  "A06b": {
    "chapter": "ご案内",
    "choices": [
      {
        "label": "最初からお願いします。",
        "to": "A04c"
      },
      {
        "label": "聞きたいことだけ、お願いします。",
        "to": "M01"
      }
    ],
    "text": "失礼しました。\nひと通りご紹介することもできますが、いかがですか？",
    "subject": "らくがきコードのご案内",
    "replyMode": "confirm"
  },
  "B10": {
    "chapter": "定例会議",
    "choices": [
      {
        "label": "なるほど。",
        "to": "B10a"
      },
      {
        "label": "次の活動も教えてください。",
        "to": "B11"
      }
    ],
    "text": "現在は毎週月曜日に、定例会議をしています。\n活動を振り返ったり、次の企画を話し合ったりする時間です。",
    "activity": "regular",
    "subject": "らくがきコードの活動",
    "replyMode": "confirm"
  },
  "B11": {
    "chapter": "ご案内",
    "choices": [
      {
        "label": "どんなことを学ぶんですか？",
        "to": "B11a"
      },
      {
        "label": "なるほど。",
        "to": "B11a"
      }
    ],
    "text": "次は、勉強会です。\nプログラミングやAIについて、手を動かしながら学び合います。",
    "activity": "study",
    "subject": "らくがきコードの活動",
    "replyMode": "quick"
  },
  "B12": {
    "chapter": "ご案内",
    "choices": [
      {
        "label": "これまでのイベントを教えてください。",
        "to": "B12a"
      }
    ],
    "text": "イベントでは、AIと一緒に\nアイデアを形にする体験などを企画しています。",
    "activity": "event",
    "subject": "らくがきコードの活動",
    "replyMode": "quick"
  },
  "D05a": {
    "chapter": "ご案内",
    "choices": [
      {
        "label": "なるほど。",
        "to": "D05b"
      },
      {
        "label": "そうなんですね。",
        "to": "D05b"
      }
    ],
    "text": "文章や画像を送る部屋が、テキストチャンネル。\n声で話す部屋が、ボイスチャンネルです。",
    "subject": "Discordの使い方",
    "map": {
      "group": "square",
      "channels": [
        "井戸端会議場"
      ]
    },
    "replyMode": "quick"
  },
  "D05b": {
    "chapter": "ご案内",
    "choices": [
      {
        "label": "話す内容に合わせて、部屋を選べばいいんですね。",
        "to": "D06"
      },
      {
        "label": "なるほど。",
        "to": "D06"
      }
    ],
    "text": "例えば「井戸端会議場」なら、雑談を読むほか、\n自分で文章を書いて会話に参加できます。",
    "subject": "Discordの使い方",
    "map": {
      "group": "square",
      "channels": [
        "井戸端会議場"
      ]
    },
    "replyMode": "quick"
  },
  "R01a": {
    "chapter": "ご案内",
    "choices": [
      {
        "label": "へえ。",
        "to": "R02"
      },
      {
        "label": "そうだったんですね。",
        "to": "R02"
      }
    ],
    "text": "らくがきコードの代表が、沖縄の「〜んちゅ」を\n取り入れてつくった呼び名なんです。",
    "subject": "らくがきコードのメンバー",
    "replyMode": "quick"
  },
  "R04a": {
    "chapter": "ご案内",
    "choices": [
      {
        "label": "違いがわかりました。",
        "to": "R05"
      }
    ],
    "text": "ええ。そこは、混ざりやすいところですね。",
    "subject": "らくがきコードのメンバー",
    "replyMode": "quick"
  },
  "R07a": {
    "chapter": "ご案内",
    "choices": [
      {
        "label": "ほかの呼び名も教えてください。",
        "to": "R07b"
      }
    ],
    "text": "はじめんちゅの4人それぞれのご紹介も、\nこの案内所に用意する予定です。",
    "note": "個別紹介は資料待ち。人物像・名前を推測しない。",
    "subject": "らくがきコードのメンバー",
    "replyMode": "quick"
  },
  "R07b": {
    "chapter": "ご案内",
    "choices": [
      {
        "label": "なるほど。",
        "to": "R08"
      },
      {
        "label": "次もお願いします。",
        "to": "R08"
      }
    ],
    "text": "運営メンバーの候補生は、\n「めいんちゅのたまご」です。",
    "subject": "らくがきコードのメンバー",
    "replyMode": "quick"
  },
  "R08a": {
    "chapter": "ご案内",
    "choices": [
      {
        "label": "ほかの案内に戻る",
        "to": "REVIEW"
      }
    ],
    "text": "ええ。らくがきコードは、\nいろいろな方に支えられています。",
    "subject": "らくがきコードのメンバー",
    "replyMode": "quick"
  },
  "C13a": {
    "chapter": "ご案内",
    "choices": [
      {
        "label": "わかりました。",
        "to": "C14"
      },
      {
        "label": "少し考えてみます。",
        "to": "C13b"
      }
    ],
    "text": "「自己紹介」には、呼ばれたい名前や興味のあることを。\nAIと一緒に作ってみたいものなども、ぜひ。",
    "subject": "Discordのカテゴリとチャンネル",
    "map": {
      "group": "compass",
      "channels": [
        "自己紹介"
      ]
    },
    "replyMode": "confirm"
  },
  "C13b": {
    "chapter": "ご案内",
    "choices": [
      {
        "label": "お願いします。",
        "to": "C14"
      }
    ],
    "text": "ええ。書きたいことが浮かんだら。\nでは、ほかのチャンネルもご紹介しますね。",
    "subject": "Discordのカテゴリとチャンネル",
    "map": {
      "group": "compass",
      "channels": [
        "自己紹介"
      ]
    },
    "replyMode": "quick"
  },
  "C33a": {
    "chapter": "ご案内",
    "choices": [
      {
        "label": "作品ごとに、話をまとめられるんですね。",
        "to": "C33b"
      },
      {
        "label": "なるほど。",
        "to": "C33b"
      }
    ],
    "text": "一つの話題ごとに、タイトル付きの投稿を作ります。\nその投稿を開くと、返信もまとめて読めます。",
    "subject": "Discordのカテゴリとチャンネル",
    "map": {
      "group": "knowledge",
      "channels": [
        "作品自慢"
      ]
    },
    "replyMode": "quick"
  },
  "C33b": {
    "chapter": "ご案内",
    "choices": [
      {
        "label": "わかりました。",
        "to": "C34"
      }
    ],
    "text": "「作品自慢」では、一つの作品について\n感想などをやり取りできます。",
    "subject": "Discordのカテゴリとチャンネル",
    "map": {
      "group": "knowledge",
      "channels": [
        "作品自慢"
      ]
    },
    "replyMode": "quick"
  },
  "J07": {
    "chapter": "ご案内",
    "choices": [
      {
        "label": "自己紹介には、何を書いたらいいですか？",
        "to": "J02"
      },
      {
        "label": "わかりました。",
        "to": "J08"
      }
    ],
    "text": "自己紹介をしたり、チャンネルを見て回ったり。\n気になった投稿には、リアクションも付けてみてください。",
    "task": "explore",
    "subject": "Discordに戻ってやること",
    "replyMode": "confirm"
  },
  "J08": {
    "chapter": "ご案内",
    "choices": [
      {
        "label": "なるほど。",
        "to": "J08a"
      },
      {
        "label": "詳しい活動も見てみたいです。",
        "to": "J08_REPLY"
      }
    ],
    "text": "詳しい活動は、ホームページにもまとめています。\n喫茶から開くリンクは、いま準備しています。",
    "note": "HPとSNSのURLは未提供。未設定の間は「準備中」。フォローや閲覧を済ませたことにしない。",
    "cue": "tasks",
    "subject": "Discordに戻ってやること",
    "replyMode": "confirm"
  },
  "J09": {
    "chapter": "ご案内",
    "choices": [
      {
        "label": "今のところ、大丈夫です。",
        "to": "GUIDE_END"
      },
      {
        "label": "もう少し話を聞きたいです。",
        "to": "M01"
      }
    ],
    "text": "Discordに戻ってやることのご案内は、ここまでです。\nほかに、聞いておきたいことはありますか？",
    "complete": "after",
    "subject": "Discordに戻ってやること",
    "replyMode": "confirm"
  },
  "J08a": {
    "chapter": "やることメモ",
    "text": "公式SNSの案内は、Linktreeにまとまっています。\n画面上の「やることメモ」から開けます。",
    "choices": [
      {
        "label": "わかりました。",
        "to": "J09"
      }
    ],
    "cue": "tasks",
    "subject": "Discordに戻ってやること",
    "replyMode": "quick"
  },
  "D00": {
    "chapter": "Discordの使い方",
    "text": "ここからは、普段のやり取りに使っている\nDiscordのお話です。",
    "choices": [
      {
        "label": "お願いします。",
        "to": "D01"
      }
    ],
    "subject": "Discordの使い方",
    "replyMode": "quick"
  },
  "R00": {
    "chapter": "メンバーの構成",
    "text": "ここからは、らくがきコードのメンバーのお話です。\nどんな関わり方の人がいるか、ご紹介します。",
    "choices": [
      {
        "label": "お願いします。",
        "to": "R01"
      }
    ],
    "subject": "らくがきコードのメンバー",
    "replyMode": "quick"
  },
  "C00": {
    "chapter": "Discordのチャンネル案内",
    "text": "ここからは、Discordの中をご案内します。\nカテゴリとチャンネルの一覧を、お見せしますね。",
    "choices": [
      {
        "label": "お願いします。",
        "to": "C10"
      }
    ],
    "subject": "Discordのカテゴリとチャンネル",
    "map": {
      "group": "compass",
      "channels": []
    },
    "replyMode": "quick"
  },
  "C10a": {
    "chapter": "羅針盤・全体連絡",
    "text": "その中の「全体連絡」は、\nサーバー全体に向けた連絡を読むチャンネルです。",
    "choices": [
      {
        "label": "なるほど。",
        "to": "C11"
      }
    ],
    "subject": "Discordのカテゴリとチャンネル",
    "map": {
      "group": "compass",
      "channels": [
        "全体連絡"
      ]
    },
    "replyMode": "quick"
  },
  "AOP1": {
    "chapter": "ボタンの使い方",
    "subject": "案内の操作",
    "text": "セリフを押すと全文を表示します。Enterやスペースでも。\n聞き直すときは「ひとつ戻る」で戻れます。",
    "choices": [
      {
        "label": "わかりました。",
        "to": "AOP_SELECTION"
      }
    ],
    "replyMode": "quick"
  },
  "AOP2": {
    "chapter": "音の切り替え",
    "subject": "案内の操作",
    "text": "音は、画面上の「音」ボタンで切り替えられます。",
    "choices": [
      {
        "label": "わかりました。",
        "to": "AOP3"
      }
    ],
    "cue": "sound",
    "replyMode": "quick"
  },
  "AOP3": {
    "chapter": "補助ボタン",
    "subject": "案内の操作",
    "text": "上の「案内表」と「やることメモ」は、\nあとで確認したいときにどうぞ。",
    "choices": [
      {
        "label": "このまま案内をお願いします。",
        "to": "COFFEE_ORDER"
      }
    ],
    "cue": "tools",
    "replyMode": "quick"
  },
  "AOP4": {
    "chapter": "案内を始める",
    "subject": "らくがきコードのご案内",
    "text": "では、順番にご案内しますね。\nまずは、らくがきコードのことから。",
    "choices": [
      {
        "label": "お願いします。",
        "to": "A07"
      }
    ],
    "replyMode": "quick"
  },
  "B10a": {
    "chapter": "定例会議",
    "subject": "らくがきコードの活動",
    "text": "会議でめいんちゅが何を話しているかは、\nDiscordの「会議」カテゴリでも見られます。",
    "choices": [
      {
        "label": "活動の進め方も見られるんですね。",
        "to": "B11"
      },
      {
        "label": "なるほど。",
        "to": "B11"
      }
    ],
    "activity": "regular",
    "replyMode": "quick"
  },
  "B11a": {
    "chapter": "勉強会",
    "subject": "らくがきコードの活動",
    "text": "これまでには、Webページの改造や、\nVS Codeというコードを書く道具の使い方を扱いました。",
    "choices": [
      {
        "label": "実際に試しながら学ぶんですね。",
        "to": "B11b"
      },
      {
        "label": "なるほど。",
        "to": "B11b"
      }
    ],
    "activity": "study",
    "replyMode": "quick"
  },
  "B11b": {
    "chapter": "勉強会",
    "subject": "らくがきコードの活動",
    "text": "HTMLで文章の構造を変えたり、\nCSSで見た目を変えたりして、違いを確かめます。",
    "choices": [
      {
        "label": "へえ。",
        "to": "B11c"
      },
      {
        "label": "なるほど。",
        "to": "B11c"
      }
    ],
    "activity": "study",
    "replyMode": "quick"
  },
  "B11c": {
    "chapter": "勉強会",
    "subject": "らくがきコードの活動",
    "text": "わからないところや、試して気づいたことも共有します。\n……同じものを見ても、気づくところは違いますから。",
    "choices": [
      {
        "label": "勉強会の雰囲気が伝わります。",
        "to": "B11_REPLY"
      },
      {
        "label": "イベントについても教えてください。",
        "to": "B12"
      }
    ],
    "activity": "study",
    "replyMode": "confirm"
  },
  "B12a": {
    "chapter": "らくがきアプリ開発教室",
    "subject": "らくがきコードの活動",
    "text": "6月25日の「らくがきアプリ開発教室」では、\nアイデアを考え、AIとアプリをつくり、作品を見せ合いました。",
    "choices": [
      {
        "label": "なるほど。",
        "to": "B12b"
      },
      {
        "label": "つくって、見せ合うところまで体験するんですね。",
        "to": "B12b"
      }
    ],
    "activity": "appClass",
    "replyMode": "quick"
  },
  "B12b": {
    "chapter": "ComoNeでのイベント",
    "subject": "らくがきコードの活動",
    "text": "10月26日には、ComoNeでも初めてイベントを開きました。\n内部メンバーを中心に、企画を試すα版の会です。",
    "choices": [
      {
        "label": "なるほど。",
        "to": "B12c"
      },
      {
        "label": "これからの企画もありますか？",
        "to": "B12c"
      }
    ],
    "activity": "comone",
    "replyMode": "quick"
  },
  "B12c": {
    "chapter": "これからの企画",
    "subject": "らくがきコードの活動",
    "text": "ねのねプログラムでは、\nロボットをつくるイベントも計画しています。",
    "choices": [
      {
        "label": "面白そうですね。",
        "to": "B12d"
      },
      {
        "label": "なるほど。",
        "to": "B12d"
      }
    ],
    "activity": "robotPlan",
    "replyMode": "quick"
  },
  "B12d": {
    "chapter": "これからの企画",
    "subject": "らくがきコードの活動",
    "text": "こちらは、まだ準備中の企画です。\n内容や日程、参加方法は、これから決めていきます。",
    "choices": [
      {
        "label": "普段のやり取りも、Discordでしているんですか？",
        "to": "B05"
      }
    ],
    "activity": "robotPlan",
    "replyMode": "quick"
  },
  "COFFEE_ORDER": {
    "chapter": "喫茶のひととき",
    "subject": "お飲みもの",
    "text": "お話の前に、コーヒーはいかがですか。\nブラックと、ミルク入りをご用意できます。",
    "choices": [
      {
        "label": "ブラックをお願いします。",
        "to": "COFFEE_BLACK"
      },
      {
        "label": "ミルク入りをお願いします。",
        "to": "COFFEE_MILK"
      },
      {
        "label": "今日は飲みものなしで。",
        "to": "COFFEE_NONE"
      }
    ],
    "replyMode": "confirm"
  },
  "COFFEE_BLACK": {
    "chapter": "喫茶のひととき",
    "subject": "お飲みもの",
    "text": "ブラックですね。承りました。\nご用意する間に、少しお話ししましょう。",
    "choices": [
      {
        "label": "お願いします。",
        "to": "AOP4"
      }
    ],
    "coffee": "ordered-black",
    "replyMode": "quick"
  },
  "COFFEE_MILK": {
    "chapter": "喫茶のひととき",
    "subject": "お飲みもの",
    "text": "ミルク入りですね。承りました。\nご用意する間に、少しお話ししましょう。",
    "choices": [
      {
        "label": "お願いします。",
        "to": "AOP4"
      }
    ],
    "coffee": "ordered-milk",
    "replyMode": "quick"
  },
  "COFFEE_NONE": {
    "chapter": "喫茶のひととき",
    "subject": "お飲みもの",
    "text": "かしこまりました。\nそれでは、このままお話ししましょう。",
    "choices": [
      {
        "label": "お願いします。",
        "to": "AOP4"
      }
    ],
    "coffee": "none",
    "replyMode": "quick"
  },
  "COFFEE_PREPARE": {
    "chapter": "喫茶のひととき",
    "subject": "お飲みもの",
    "text": "……豆のいい香りがしてきました。\nコーヒーをいれながら、続きをお話ししますね。",
    "choices": [
      {
        "label": "いい香りですね。",
        "to": "V01"
      },
      {
        "label": "お願いします。",
        "to": "V01"
      }
    ],
    "coffee": "preparing",
    "replyMode": "quick"
  },
  "COFFEE_SERVE": {
    "chapter": "喫茶のひととき",
    "subject": "お飲みもの",
    "text": "……お待たせしました。コーヒーをどうぞ。\nお砂糖は、お好みで。",
    "choices": [
      {
        "label": "ありがとうございます。",
        "to": "REVIEW"
      }
    ],
    "coffee": "served",
    "replyMode": "quick"
  },
  "COFFEE_SIP": {
    "chapter": "喫茶のひととき",
    "subject": "お飲みもの",
    "text": "……少し、お話に夢中になってしまいました。\nコーヒーもどうぞ。冷めてしまいますよ。",
    "choices": [
      {
        "label": "ひと口飲む",
        "to": "COFFEE_REST"
      }
    ],
    "coffee": "reminded",
    "replyMode": "quick"
  },
  "COFFEE_REST": {
    "chapter": "喫茶のひととき",
    "subject": "お飲みもの",
    "text": "……どうぞ、ごゆっくり。",
    "choices": [
      {
        "label": "続きを聞く",
        "to": "REVIEW"
      }
    ],
    "replyMode": "quick"
  },
  "V07_REPLY": {
    "chapter": "ShareからThinkへ",
    "subject": "大切にしていること",
    "text": "ええ。困ったところから話してみてもらえれば。\nそこから、つくったものを見直すきっかけにもなります。",
    "choices": [
      {
        "label": "なるほど。",
        "to": "V04"
      }
    ],
    "replyMode": "quick"
  },
  "B11_REPLY": {
    "chapter": "勉強会からイベントへ",
    "subject": "らくがきコードの活動",
    "text": "少しでも雰囲気が伝わったなら、うれしいです。\n次は、イベントのお話をしましょう。",
    "choices": [
      {
        "label": "お願いします。",
        "to": "B12"
      }
    ],
    "replyMode": "quick"
  },
  "J08_REPLY": {
    "chapter": "ホームページの案内",
    "subject": "Discordに戻ってやること",
    "text": "リンクをご用意できたら、喫茶からも開けるようにしますね。\n今ご覧いただける公式SNSの案内もあります。",
    "choices": [
      {
        "label": "教えてください。",
        "to": "J08a"
      }
    ],
    "replyMode": "quick"
  },
  "AOP_SELECTION": {
    "chapter": "返事の選び方",
    "subject": "案内の操作",
    "text": "答えで話が変わるときは、返事を選んでから決定を。\n矢印キーで選んで、Enterやスペースでも決められます。",
    "choices": [
      {
        "label": "なるほど。",
        "to": "AOP2"
      },
      {
        "label": "わかりました。",
        "to": "AOP2"
      }
    ],
    "replyMode": "quick"
  }
};
const SECTIONS = [
  [
    "intro",
    "らくがきコード",
    "A07"
  ],
  [
    "values",
    "Vibe・Share・Think",
    "V01"
  ],
  [
    "activities",
    "定例会議・勉強会・イベント",
    "B01"
  ],
  [
    "discord",
    "Discordの基本",
    "D00"
  ],
  [
    "roles",
    "メンバーとロール",
    "R00"
  ],
  [
    "compass",
    "羅針盤",
    "C00"
  ],
  [
    "square",
    "広場",
    "C20"
  ],
  [
    "knowledge",
    "知恵袋",
    "C30"
  ],
  [
    "meetings",
    "会議・勉強会・イベント・連携",
    "C40"
  ],
  [
    "after",
    "案内の後にやること",
    "J01"
  ]
];
