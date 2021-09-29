let subjectTeachers = [
    ['https://drive.google.com/file/d/1oMEUfG-ShyI5eBFAs9MQOvS2GmTwvZ28/view',
'https://drive.google.com/file/d/1zC8elFA3rk8BIiPtogk7nPF1vSNWGsPN/view?usp=sharing',
'https://drive.google.com/file/d/1tCc0uMjyUQS2myjK0bR5jGvZ2sN26FSA/view?usp=sharing',
'https://drive.google.com/file/d/1Iomg7BPAUC7hzOtkUF4m5I6QPI_xm7gw/view?usp=sharing',
'https://drive.google.com/file/d/12aSUzCyXKu-cpr9sB-geBWezwCQL5aXB/view?usp=sharing',
'https://drive.google.com/file/d/1nM1uYmmLU6IQmiPXrVI_N_h6pR6LDFqs/view?usp=sharing',
],
[
'https://drive.google.com/file/d/1jtx8ftca7Ow-MWFio4rmEBpp_PoMV3Xk/view?usp=sharing',
'https://drive.google.com/file/d/1hu71fZjl3v64qSiUo7MyAsNsKOXqYUfE/view?usp=sharing',
'https://drive.google.com/file/d/1zgZIOmlLenxWB6MxoZjKQprRUNvJom8k/view?usp=sharing',
'https://drive.google.com/file/d/1W2EazHJkHAOQc0DkbZllM-4FriXpYuq9/view?usp=sharing',
'https://drive.google.com/file/d/1-o8tliOslB4svyoTOfX9z3DZZdCr5Ils/view?usp=sharing',
'https://drive.google.com/file/d/1eiYnE2ezHRt3wtsViKhaXr98HpCzRQf0/view?usp=sharing',
],
[
'https://drive.google.com/file/d/1tFD2E34pu_EH11R28KAvnYwxdGFduI2i/view?usp=sharing',
'https://drive.google.com/file/d/13HecpdQNSEJUWxZEtd_xJZmQE8ke7GmO/view?usp=sharing',
'https://drive.google.com/file/d/1loCcNr8pb9kL-m-wW_ThGCZ4cP3m1IQp/view?usp=sharing',
'https://drive.google.com/file/d/1UXfHvMc3pJX3V_M2voJ-wRa55uSlyze0/view?usp=sharing',
'https://drive.google.com/file/d/1fOwQjuZkWzHbAA3rT5c5a3dkdeABHYMx/view?usp=sharing',
'https://drive.google.com/file/d/1nKanYfUCc24DIqQutFF2icq5ukATiYHC/view?usp=sharing',
'https://drive.google.com/file/d/1zu9JzCSepMR8sd0PcnjLu8mklZH2_EFs/view?usp=sharing',
],
[
'https://drive.google.com/file/d/1B4QAjeAdUF9Eyjwm8WttiOTTDp-h1aLA/view?usp=sharing',
'https://drive.google.com/file/d/1ZfvaR9EjQfT7vnvvWALgcWCTyC1Ev1gg/view?usp=sharing',
'https://drive.google.com/file/d/1S11x4ZGBMJ_-QaFcdAhcDVo36V8C5dQ9/view?usp=sharing',
'https://drive.google.com/file/d/19IVp5GpEIyA1Wz6jyUfFi_5VAzl5rfFc/view?usp=sharing',
'https://drive.google.com/file/d/1saVa52EKHPlv3rlHblkJotxwxxyNugAw/view?usp=sharing',
'https://drive.google.com/file/d/19lLYhqaG6dnRJeiNcbWhuXcxN443ZJci/view?usp=sharing',
'https://drive.google.com/file/d/1lugNq6JrvwyTRAGgzqc_OGZbX11dDyBg/view?usp=sharing',
]
]

text = '';
for (var levelNumber=1; levelNumber<=4; levelNumber++) {
    text+="<hr><table class='table' style='margin-bottom:50px'><thead><tr>Secondary " + levelNumber
    text+= "</tr></thead>"
    text+= "<tbody><tr>"
    if (levelNumber == 1 || levelNumber == 2) {
        maxClassLevel = 6
    }
    else if (levelNumber == 3 || levelNumber == 4) {
        maxClassLevel = 7
    }
    for (var classNumber=1 ; classNumber<= maxClassLevel; classNumber++ ) {
        text+= "<td><a href='"
        text += subjectTeachers[levelNumber - 1][classNumber - 1]
        text+="'>"
        text += levelNumber + "E" + classNumber
        text+= "</a></td>"

    }
    text+= "</tr></tbody></table>"
    

}

$('#formteachers table').css({
    "background-color":"green"
})
$('#formteachers').html(text)