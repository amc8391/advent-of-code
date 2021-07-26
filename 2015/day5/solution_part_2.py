
def has_non_overlapping_pair(input_string):
    '''
    It contains a pair of any two letters that appears at least twice in the
    string without overlapping, like xyxy (xy) or aabcdefgaa (aa),
    but not like aaa (aa, but it overlaps).
    '''
    pairs_to_indexes = {}
    for char_idx in range(0, len(input_string) - 1):
        pair = input_string[char_idx : char_idx + 2]
        if pair in pairs_to_indexes:
            pairs_to_indexes[pair].append(char_idx)
        else:
            pairs_to_indexes[pair] = [char_idx]
    
    for positions in pairs_to_indexes.values():
        for pos in positions:
            for second_pos in positions:
                if abs(pos - second_pos) > 1:
                    return True

    return False

def has_spaced_duplicate_char(input_string):
    '''
    It contains at least one letter which repeats with exactly one letter
    between them, like xyx, abcdefeghi (efe), or even aaa.
    '''
    for char_idx in range(0, len(input_string) - 2):
        substr = input_string[char_idx : char_idx + 3]
        if substr[0] == substr[2] and substr[0] != substr[1]:
            return True
    return False

def is_string_nice(input_string):
    '''
    It contains a pair of any two letters that appears at least twice in the
    string without overlapping, like xyxy (xy) or aabcdefgaa (aa),
    but not like aaa (aa, but it overlaps).
    
    It contains at least one letter which repeats with exactly one letter
    between them, like xyx, abcdefeghi (efe), or even aaa.
    '''
    niceness_criteria = [
        lambda in_str : has_non_overlapping_pair(in_str),
        lambda in_str : has_spaced_duplicate_char(in_str)
    ]

    for criteria_check in niceness_criteria:
        if not criteria_check(input_string):
            return False
    return True
