# 第12章：例外処理  
―「エラーで落ちない」プログラムを書く ―

---

## この章のゴール 🎯

この章を終えると、次のことができるようになります。

- エラーと例外の違いを理解する
- `try` / `catch` を使える
- 例外を設計として扱える

---

## 1. エラーと例外の違い

- `Error`：致命的（基本対処しない）
- `Exception`：対処可能

👉 **扱うのは例外**

---

## 2. 例外が起きる例

```java
int[] arr = {1, 2, 3};
System.out.println(arr[5]);
```

👉 **実行時エラー。**

---

## 3. try / catch の基本

```java
try {
    // 処理
} catch (Exception e) {
    // 例外処理
}
```

---

## 4. 複数の catch

```java
try {
} catch (NullPointerException e) {
} catch (Exception e) {
}
```

- **広い例外は最後**

---

## 5. finally

```java
finally {
    // 必ず実行
}
```

---

## 6. checked / unchecked 例外

- `checked`：コンパイル時に強制
- `unchecked`：実行時

---

## 7. 例外を投げる

```java
if (age < 0) {
    throw new IllegalArgumentException();
}
```

---

## 8. よくある誤解

- ❌ 例外を無視する
- ❌ 全部 catch する

👉 **バグを隠すな**

---

## 9. ハンズオン課題

1. 配列アクセスを `try-catch` する
2. `null` の例外捕捉
3. 自作例外を投げる

---

## 10. この章のまとめ

- 例外は設計の一部
- 落ちないコードを書く

---

## 次章予告

次は **第13章：パッケージとモジュール** です。

- クラスを整理する方法
- `import` の仕組み
- 大規模開発への備え

を扱います。

