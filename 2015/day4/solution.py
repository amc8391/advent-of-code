import hashlib

INPUT_PATH = '2015/day4/input.txt'
def get_zeroed_md5(prefix, leading_zeros_count):
    suffix_int = 1
    result_hash = ''
    md5_lead = '0' * leading_zeros_count

    while (not result_hash.startswith(md5_lead)):
        suffix_int += 1
        result_hash = hashlib.md5((prefix + str(suffix_int)).encode('utf-8')).hexdigest()
    return suffix_int

def read_input(path):
    with open(path) as f:
        prefix = f.read()
    return prefix

if __name__ == '__main__':
    input_prefix = read_input(INPUT_PATH)
    print(f'MD5 suffix for 5 zero hash: {get_zeroed_md5(input_prefix, 5)}')
    print(f'MD5 suffix for 6 zero hash: {get_zeroed_md5(input_prefix, 6)}')
