// ============================================================
// 🎨 カスタムアプリ設定 - 自由に変更可能
// ============================================================

export const APP_CONFIG = {
    // アプリの基本情報（自由に変更可能）
    name: "重複チェックツール",
    version: "0.20",
    description: "Firebase + Google認証によるテキスト重複検出システム",
    
    // デフォルト値設定（カスタマイズ可能）
    defaults: {
        maxFileSize: 10485760, // 10MB
        allowedFileTypes: [".txt", ".md", ".csv"],
        autoTitleLength: 30 // 自動タイトルの最大文字数
    },
    
    // UI設定（カスタマイズ可能）
    ui: {
        theme: {
            primaryColor: "#007bff",
            secondaryColor: "#6c757d",
            successColor: "#28a745",
            backgroundColor: "#f8f9fa"
        },
        
        // 入力方法ボタン（自由に変更・追加可能）
        inputMethods: [
            { id: "file", label: "📁 ファイル", color: "#007bff" },
            { id: "text", label: "📝 テキスト", color: "#6c757d" }
        ],
        
        // クイックアクションボタン（カスタマイズ可能）
        quickActions: [
            { id: "paste", label: "📋 貼り付け", color: "#28a745" },
            { id: "clear", label: "🗑️ クリア", color: "#6c757d" },
            { id: "search", label: "🔍 検索", color: "#17a2b8" }
        ],
        
        // キーボードショートカット設定（カスタマイズ可能）
        keyboard: {
            search: "Ctrl+F",          // 検索開始
            save: "Ctrl+S",            // データ保存
            paste: "Ctrl+V",           // 貼り付け
            clear: "Escape"            // クリア
        },
        
        // 表示設定
        display: {
            maxHistoryItems: 10,       // 履歴表示件数
            dateFormat: "YYYY-MM-DD",  // 日付形式
            timeFormat: "HH:mm"        // 時刻形式
        }
    },
    
    // データ設定（カスタマイズ可能）
    data: {
        // Firebase Collection名（変更する場合は注意）
        collection: "files",
        
        // 必須フィールド
        requiredFields: ["fileName", "content", "fileType"],
        
        // オプションフィールド
        optionalFields: ["memo", "userEmail", "fileSize", "inputType"]
    }
};

// デバッグ設定（開発時のみ有効にする）
export const DEBUG_CONFIG = {
    enabled: true,  // false にすると全デバッグ機能が無効
    features: {
        console: true,      // コンソール出力
        copyButtons: true,  // コピーボタン
        apiLogs: true,      // API通信ログ
        userActions: true   // ユーザー操作ログ
    }
};