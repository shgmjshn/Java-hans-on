# 第17章：標準ライブラリ活用  
― 「車輪の再発明」をしない ―

---

## この章のゴール 🎯

この章を終えると、次のことができるようになります。

- Java標準ライブラリの役割を理解する
- 日付と時間を安全に扱える
- `Optional` を使って `null` を回避できる
- 便利なユーティリティクラスを活用できる

---

## 1. 標準ライブラリとは何か

> **Javaに最初から用意されている、信頼できる部品集**

- テスト済み
- 多くの現場で使用実績あり
- 自作より安全

👉 **まず標準を疑う**

---

## 2. 日付と時間（java.time）

### 現在日時

```java
LocalDateTime now = LocalDateTime.now();
```

### 日付の計算

```java
LocalDate tomorrow = LocalDate.now().plusDays(1);
```

---

## 3. フォーマット

```java
DateTimeFormatter f =
    DateTimeFormatter.ofPattern("yyyy-MM-dd");

String s = LocalDate.now().format(f);
```

---

## 4. Optionalとは何か

**「値があるかもしれない」を型で表現する**

```java
Optional<String> opt = Optional.of("Java");
```

---

## 5. Optionalの使い方

```java
opt.ifPresent(System.out::println);

String v = opt.orElse("default");
```

- `null`チェック不要
- NPE防止

---

## 6. Math / Objects

```java
int max = Math.max(10, 20);

Objects.requireNonNull(name);
```

---

## 7. ハンズオン課題

1. 日付を取得して表示
2. `Optional`でデフォルト値設定
3. `Math`を使った計算

---

## 8. この章のまとめ

- 標準ライブラリは最強
- `Optional`で安全設計
- **再発明しない**

---

## 次章予告

次は **第18章：ミニアプリ制作** です。

- 学んだ知識を総動員する
- 仕様から設計・実装への流れ
- 小さな成果物を作る

を扱います。

