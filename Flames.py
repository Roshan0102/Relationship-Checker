Name1 = input("Enter the name1").lower().split(' ')
Name2 = input("Enter the name2").lower().split(' ')
Name1 = ''.join(Name1)
Name2 = ''.join(Name2)
for i in Name1:
     if i in Name2:
         Name1 = Name1.replace(i,'',1)
         Name2 = Name2.replace(i,'',1)
         
concatenated_str = Name1 + Name2
lent = len(concatenated_str)
lis = ['FRIENDS','LOVERS','AFFECTION','MARRIAGE','ENEMY','SISTER']

while(len(lis) != 1):
    result = (lent - 1) % len(lis)
    if result >= 0:
            right = lis[result + 1:]
            left = lis[: result]
            lis = right + left
    else:
            lis = lis[: len(lis) - 1]
 
final = lis[0]
print("Relationship status :", final)
    