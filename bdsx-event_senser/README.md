# event senser plugin made by code
## ESP(이벤트 감지 플러그인)이란?
ESP는 bdsx용 플러그인으로, 이벤트들을 감지하는 용으로 사용됩니다.

## ESP 폴더 구조
```
[bdsx-event_senser]
        |
        |-- [index.ts] // 코드가 여기에서 짜졌습니다.
        |-- [index.js] // node.js에서 ts를 js로 변환해줍니다.
```
## 사용법

모든 감지는 scoreboard와 tag로 output됩니다.

### 리스트
```|-- last_chat_content
|-- dead_point
[scores]
    |
    |-- is_attacking
    |-- is_jumping
    |-- dead_point
    |-- is_pushing_shift

[tag(문자열)]
    |
    |-- last_chat_content(lcc: < 이렇게 시작함.)

```