from exercicio3 import valida_email
import pytest


def test_username_is_invalid_format():
    with pytest.raises(ValueError):
        valida_email('*123abc@gmail.com')


def test_website_is_invalid_format():
    with pytest.raises(ValueError):
        valida_email('a123abc@gmail*.com')


def test_extension_is_invalid_format():
    with pytest.raises(ValueError):
        valida_email('a123abc@gmail.coms')


def test_email_correct_is_valid():
    assert valida_email('trybe@trybe.com') is None
