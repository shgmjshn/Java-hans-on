# 第18章：ミニアプリ制作  
― 学んだ知識を「形」にする ―

---

## この章のゴール 🎯

この章を終えると、次のことができるようになります。

- 仕様をコードに落とせる
- クラス設計を実践できる
- Javaでアプリを完成させる

---

## 1. 作るもの：成績管理ミニアプリ

### 仕様

- 名前と点数を管理
- 平均点を計算
- 結果をファイルに保存

---

## 2. 設計を文章で書く

1. 学生は名前と点数を持つ
2. 複数の学生を管理する
3. 平均点を計算する

---

## 3. Studentクラス

```java
class Student {
    private String name;
    private int score;

    Student(String name, int score) {
        this.name = name;
        this.score = score;
    }

    int getScore() {
        return score;
    }

    String getName() {
        return name;
    }
}
```

---

## 4. 管理クラス

```java
class ScoreManager {
    private List<Student> students = new ArrayList<>();

    void add(Student s) {
        students.add(s);
    }

    double average() {
        return students.stream()
            .mapToInt(Student::getScore)
            .average()
            .orElse(0.0);
    }
}
```

---

## 5. mainクラス

```java
public class Main {
    public static void main(String[] args) {
        ScoreManager m = new ScoreManager();
        m.add(new Student("Alice", 80));
        m.add(new Student("Bob", 70));

        System.out.println(m.average());
    }
}
```

---

## 6. 改良アイデア

- 標準入力対応
- CSV入出力
- 合否判定追加

---

## 7. この章のまとめ

- 仕様 → 設計 → 実装
- **Javaで作れることを証明**

---

## 次章予告

次は **第19章：次のステップ**（最終章） です。

- これからの学習方針
- Web系・業務系の道
- 「作り続ける」ことの重要性

を扱います。

