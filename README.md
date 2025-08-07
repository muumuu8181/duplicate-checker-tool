# 🔍 重複チェックツール v0.19 - Core/Custom分離版

Firebase + Google認証によるテキスト重複検出システムです。**Core/Custom分離構造**により、安全で効率的なカスタマイズが可能になりました。

## 🌟 主要機能

### 📊 基本機能
- **📁 ファイル管理**: テキストファイル・MDファイル・CSVファイルの保存と管理
- **📝 テキスト入力**: クリップボードから直接貼り付け、自動タイトル生成
- **🔍 キーワード検索**: 保存したファイル内の全文検索機能
- **🔐 Google認証**: 安全なGoogle OAuth認証システム
- **🔄 リアルタイム同期**: Firebase Realtime Databaseによるデバイス間同期

### 🎨 Core/Custom分離構造
- **🚫 Core フォルダ**: 触ってはいけない安全領域（Firebase設定・GitHub Actions等）
- **✅ Custom フォルダ**: 自由にカスタマイズ可能（色・ボタン・動作設定）
- **🔧 簡単変更**: 他のツール（文書管理・ナレッジベース等）への転用が容易
- **🛡️ 安全性**: 誤った変更による動作不良を防止

### 💡 使用シーン
- 📚 ドキュメントの重複チェック
- 📧 メールマガジンのアーカイブ
- 📝 テキストデータの一元管理
- 🔍 過去の記録から特定情報の検索

## 🚀 使用方法

### ライブデモ
**https://[your-username].github.io/duplicate-checker-tool/**

### ローカル実行
1. HTTPサーバーを起動：
   ```bash
   python -m http.server 8000
   ```
   または
   ```bash
   npx http-server -p 8000
   ```

2. ブラウザで `http://localhost:8000` にアクセス

3. Googleアカウントでログイン

4. ファイルをアップロードまたはテキストを入力して保存

## 🔧 技術仕様

- **フロントエンド**: Vanilla HTML/CSS/JavaScript
- **認証**: Firebase Authentication (Google OAuth)
- **データベース**: Firebase Realtime Database
- **デプロイ**: GitHub Pages
- **対応ブラウザ**: Chrome, Firefox, Safari, Edge

## 📱 データ構造

```json
{
  "users": {
    "userId": {
      "files": {
        "recordId": {
          "fileName": "document.txt",
          "fileSize": 2048,
          "fileType": "text/plain",
          "content": "ファイルの内容...",
          "memo": "重要な文書",
          "timestamp": 1722944530000,
          "createdAt": "2025-08-07T15:00:00.000Z",
          "inputType": "file",
          "userEmail": "user@example.com"
        }
      }
    }
  }
}
```

## 🛡️ プライバシー

- データはユーザー別に完全分離
- Firebase認証による安全なアクセス制御
- 個人情報はFirebaseサーバー側で保護
- アプリコードに個人データは含まれません

## 📁 プロジェクト構造 - Core/Custom分離版

### 🔧 フォルダ構成

```
duplicate-checker-tool/
├── core/                           # 🚫 触ってはいけない領域
│   ├── .github/                   # GitHub Actions設定
│   │   └── workflows/
│   │       └── pages.yml          # GitHub Pages自動デプロイ
│   ├── src/                       # Core Firebase設定
│   │   └── firebase-config.js     # Firebase認証・DB設定（未使用）
│   └── universal-system/          # Universal Template システム
├── custom/                         # ✅ 自由にカスタマイズ可能
│   ├── app-config.js              # アプリ設定（UIテキスト・動作設定）
│   └── styles.css                 # カスタムCSS（デザイン全般）
├── tools/                          # 🔧 便利ツール
│   ├── data-storage/              # データストレージツール
│   └── testing/                   # テストツール
├── index.html                      # メインアプリファイル
└── README.md                       # このファイル
```

### 🚫 CORE フォルダ（触ってはいけない）

- **🔥 Firebase設定** - 認証・データベース接続の核心部分（絶対変更禁止）
- **⚙️ GitHub Actions** - 自動デプロイ設定（変更するとデプロイ失敗）
- **🛠️ Universal System** - テンプレート基盤（Core変更は全体に影響）

### ✅ CUSTOM フォルダ（自由にカスタマイズ可能）

- **🎨 app-config.js** - アプリ名・ボタン設定・動作設定
- **🎨 styles.css** - カラーテーマ・フォント・レイアウト・ダークモード

## 🔄 他のアプリに変更する方法

### ✅ 変更してOKなファイル
- `custom/app-config.js` → アプリの動作・設定
- `custom/styles.css` → 見た目・デザイン
- `index.html` の表示部分のみ → UI構造

### 🚫 変更NGなファイル
- `core/` 内のすべて
- `index.html` のFirebase設定部分

### 🎯 カスタマイズ例

#### ナレッジベースツールに変更
1. `custom/app-config.js` で：アプリ名・UIテキストをナレッジベース関連に変更
2. `custom/styles.css` で：カラーテーマを知識管理系に変更
3. `index.html` で：表示テキストを情報管理関連に変更（**Firebase設定は変更禁止**）

#### 文書アーカイブツールに変更
1. `custom/app-config.js` で：アプリ名・設定を文書保管関連に変更
2. `custom/styles.css` で：アーカイブ系カラーテーマに変更

## ⚡ 開発ワークフロー

1. **カスタマイズ** → `custom/` フォルダのみ編集
2. **テスト** → ローカルでHTTPサーバー起動
3. **デプロイ** → `git push` で自動デプロイ
4. **確認** → https://[your-username].github.io/duplicate-checker-tool/

## 🛡️ 保護メカニズム

- **Core分離** - 誤った変更を物理的に防止
- **明確な境界** - 触ってOK/NGが一目瞭然
- **独立カスタマイズ** - 他への影響なし
- **バックアップ保護** - Core部分は常に安全

## 🎯 開発情報

- **バージョン**: v0.19
- **作成日**: 2025-08-07
- **言語**: JavaScript (ES6)
- **ライセンス**: MIT

## 📋 更新履歴

### v0.19 (2025-08-07)
- **UI改善**
- ファイルタイトルを10文字に短縮表示
- 保存件数の表示を追加
- 1行ずつのコンパクトな履歴表示
- ホバー時に完全な情報をツールチップ表示

### v0.18 (2025-08-07)
- **重複チェックツール**として完全動作
- ファイルアップロード・テキスト入力両対応
- キーワード検索機能実装
- ドラッグ&ドロップ対応
- 自動タイトル生成機能

### v0.2 (Core/Custom構造)
- **Core/Custom分離構造**導入
- `core/` フォルダ：安全な核心部分
- `custom/` フォルダ：カスタマイズ可能領域
- プロジェクト構造ドキュメント追加
- 他ツールへの転用が容易に

### v0.1 (Universal Template)
- 初回リリース
- Firebase + Google認証実装
- Universal Templateシステム採用
- GitHub Pages デプロイ対応

## 🤝 貢献

Issue・Pull Request歓迎です。改善提案やバグ報告をお待ちしています。

---

**🚀 GitHub Pages**: https://[your-username].github.io/duplicate-checker-tool/