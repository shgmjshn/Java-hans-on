# 第16章：ファイル入出力  
― ファイルを「安全に」読み書きする ―

---

## この章のゴール 🎯

この章を終えると、次のことができるようになります。

- Javaでファイルを読む・書く
- `try-with-resources` を使える
- 例外を考慮した実装ができる

---

## 1. なぜファイル入出力が重要か

実務では：

- 設定
- ログ
- CSV / JSON

👉 **避けて通れない**

---

## 2. 推奨API（java.nio.file）

```java
import java.nio.file.Files;
import java.nio.file.Path;
```

---

## 3. ファイルを読む

```java
try {
    List<String> lines = Files.readAllLines(Path.of("sample.txt"));
    lines.forEach(System.out::println);
} catch (IOException e) {
    System.out.println("読み込み失敗");
}
```

---

## 4. ファイルに書く

```java
try {
    Files.writeString(Path.of("output.txt"), "Hello File");
} catch (IOException e) {
    System.out.println("書き込み失敗");
}
```

---

## 5. try-with-resources

```java
try (BufferedReader br = Files.newBufferedReader(Path.of("sample.txt"))) {
    String line;
    while ((line = br.readLine()) != null) {
        System.out.println(line);
    }
}
```

- **自動クローズ**
- `finally` 不要

---

## 6. パスの注意点

- 相対パスは実行位置基準
- 絶対パスで切り分け

---

## 7. ハンズオン課題

1. ファイル表示
2. 複数行書き込み
3. 例外メッセージ表示

---

## 8. この章のまとめ

- NIOを使う
- 例外前提で書く
- **実務必須スキル**

---

## 次章予告

次は **第17章：実践的な応用へ**（予定） です。

これまでの知識を活かして、より高度な機能やアプリケーション開発の手法について学びます。

