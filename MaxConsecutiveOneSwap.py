# Given a binary string A. 
# It is allowed to do at most one swap between any 0 and 1. 
# Find and return the length of the longest consecutive 1’s that can be achieved.

A = "1101001100101110"
n = len(A)
count = 0
ans = float('-inf')

for i in range(n):
    if A[i] == '1':
        count += 1
     
for i in range(n):
    if A[i] == '0':
        l = 0
        r = 0
        j = i-1
        while (j>=0 and A[j] == '1'):
            l += 1
            j -= 1
        k = i+1
        while (k<n and A[k] == '1'):
            r += 1
            k += 1

        if(count > l+r):
            ans = max(ans, l+r+1)
            print(ans)
        else:
            ans = max(ans, l+r)
            print(ans)

if ans == float('-inf'):
    ans = n
    print(ans)

print(ans)