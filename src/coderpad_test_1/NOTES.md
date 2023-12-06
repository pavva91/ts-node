# Test on [CoderPad] (https://ide.codingame.eu/) 
Test done at the 03:48 of the 06/12/2023

Topics:

-   TypeScript
-   Node.js
-   SQL
-   Git
-   AWS
-   Agile/Scrum

## SQL

-   Verify not null field (IS NOT NULL)

```sql
SELECT * FROM users WHERE users.age IS NOT NULL
```

-   Delete Record from DB (DELETE)

```sql
DELETE FROM table_name WHERE condition;
```

-   Calculate Division between fields of a table:

```sql
CAST(customers.total AS FLOAT) / CAST(customer.orders) AS FLOAT AS "ratio"
```

-   Calculate Division between fields of a table, avoid ERROR: division by zero (?)

## AWS

-   Enable CORS on S3:
    -   [https://docs.sevenbridges.com/docs/enabling-cross-origin-resource-sharing-cors] (https://docs.sevenbridges.com/docs/enabling-cross-origin-resource-sharing-cors)
-   Send commands to staging environment (virginia)

## TypeScript

### Problems

-   Node.js Concurrency with workers (./worker-concurrency.ts)
-   Input stream with regex (./regex.ts)
-   Best Chinese Gift (./gift.ts)
-   Given a network and an initial node calulate the exit node and detect if loops happens (./endpoint.ts)

### Call Setter Once (new feature)

-   https://developapa.com/call-setter-once/

```typescript
class MyClass {
    @mail()
    @callFunctionOnlyOnce()

}
export function callFunctionOnlyOnce() {
}
```

## Git

-   How to list untracked files:

```bash
git ls-files --others --exclude-standard
```

-   What's the use of git commit --amend
    -   2 uses:
        -   Rename last commit
        ```bash
        git commit --amend -m "new name"
        ```
        -   Add files to commit (--no-edit to avoid renaming)
        ```bash
        git add file_i_forgot_to_commit.txt
        git commit --amend --no-edit
        # OR
        git commit --amend -m "new name"
        ```
-   What's the goal of git bisect - Is a binary search on commit to find the commit that introudced the bug that broke the system (current head is broken) - How to run bisect:

    ```bash
    git checkout KNOWN_BAD_COMMIT
    git bisect start

    # Confirm that our test script is correct, and fails on the bad commit.
    ./test

    # Should output != 0.
    echo $?

    # Tell Git that the current commit is bad.
    git bisect bad

    # Same for a known good commit in the past.
    git checkout KNOWN_GOOD_COMMIT
    ./test

    # Should output 0.
    echo $?

    # After this, git automatically checks out to the commit
    # in the middle of KNOWN_BAD_COMMIT and KNOWN_GOOD_COMMIT.
    git bisect good

    # Bisect automatically all the way to the first bad or last good rev.
    git bisect run ./test

    # End the bisect operation and checkout to master again.
    git bisect reset
    ```

-   What's the difference between git pull and git rebase
    -   git pull: will show the merge on the history (you see the ramification, the forking)
    -   git rebase: will put the feature branch on top of the master (re-base, you will see a linear history with no ramifications)

## Agile/Scrum

-   What is the priority on building a backlog
-   What's the goal of a sprint retrospective
-   What you put on user story
