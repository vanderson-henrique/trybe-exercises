from exercicio2 import discoverNumber


def test_phrase_should_be_converted_number():
    assert discoverNumber('1-HOME-SWEET-HOME') == '1-4663-79338-4663'
    assert discoverNumber('MY-MISERABLE-JOB') == '69-647372253-562'
    assert discoverNumber('MY-LOVE') == '69-5683'
