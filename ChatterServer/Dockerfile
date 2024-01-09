FROM maven
RUN mkdir /backend
WORKDIR /backend
COPY . /backend
RUN mvn clean install
CMD "./run"
