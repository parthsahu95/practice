# Given a binary string A. 
# It is allowed to change one 0 to 1. 
# Find and return the length of the longest consecutive 1’s that can be achieved.

# This is my own solution which i attempted. runs loop n times (Can be improved with range starting from 0)
# simpler discussed solution runs 3n times, same O(n). Just iterate and check left and right at every 0.

A = [0,1,1,1,0,1,1]

lc = 0
rc = 1
ans = 1
flag = False

for i in range(1, len(A)):
    if A[i] == 1:
        if A[i-1] == 0:
            flag = True
            rc = 1
        if A[i-1] == 1:
            rc += 1

    if A[i] == 0:
        flag = True
        ans = max(ans, lc+rc+1)
        if A[i-1] == 1:
            lc = rc
            rc = 0
        if A[i-1] == 0:
            flag = True
            lc = 0
            rc = 0
            
    if i == len(A) - 1:
        if flag == True:
            ans = max(ans, lc+rc+1)

        if flag == False:
            ans = max(ans, lc+rc)
    
    print(lc,rc, ans)
