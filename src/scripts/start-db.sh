export $(grep -v '^#' ../.env | xargs)


echo "echo stop & remove old docker [$SERVER] and start a new instance"
(docker kill $SERVER || :) && \
    (docker rm $SERVER || :) && \
    docker run --name $SERVER -e POSTGRES_PASSWORD=$POSTGRES_PASSWORD\
    -e PGPASSWORD=$POSTGRES_PASSWORD \
    -e POSTGRES_USER=$POSTGRES_USER \
    -p 5433:5432 \
    -d postgres


echo "sleep wait for [$SERVER] to start";
sleep 3;

# create the db 
echo "CREATE DATABASE $POSTGRES_DATABASE ENCODING 'UTF-8';" | docker exec -i $SERVER psql -U postgres
echo "\l" | docker exec -i $SERVER psql -U postgres

